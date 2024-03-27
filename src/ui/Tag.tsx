import styled from 'styled-components';

import { TagWithCount as TagWithCountType } from '../types/types';
import { useDeleteTag } from '../features/tags/useDeleteTag';

import { GoTrash } from 'react-icons/go';

import BasicModal from './BasicModal';
import { useState } from 'react';
import Button from './Button';

import DeleteBox from './DeleteBox';

const StyledTag = styled.li`
  display: inline-block;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  border: 0.5px solid;
  border-radius: var(--border-radius-tiny);

  padding: 0 1rem 0 1rem;

  color: var(--color-grey-1000);

  font-size: 1.3rem;
  background-color: inherit;
  text-transform: uppercase;

  cursor: pointer;

  button {
    position: absolute;
    border: none;
    order: 1;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: var(--color-grey-0);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.1s ease-in-out;

    /* border-radius: var(--border-radius-tiny); */
    & svg {
      width: 1.7rem;
      height: 1.7rem;
      color: var(--color-grey-600);
    }
    &:hover {
      opacity: 1;
      left: 50%;
    }
  }

  &:hover {
    color: var(--color-red-300);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const PostCount = styled.span`
  margin-left: 1rem;
`;

type TagProps = TagWithCountType;

function Tag({ tag, withDel, count }: { tag: TagProps; withDel?: boolean; count?: boolean }) {
  const { deleteTag, isPending: isDeleting } = useDeleteTag();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledTag>
        {withDel ? (
          <button onClick={handleModalOpen} disabled={isDeleting}>
            <GoTrash />
          </button>
        ) : null}
        <span>{tag.tagName}</span>
        {count ? (
          tag.postCount ? (
            <PostCount>{tag.postCount}</PostCount>
          ) : (
            <PostCount>0</PostCount>
          )
        ) : null}
      </StyledTag>
      <BasicModal width='40rem' open={modalOpen} onClose={handleModalClose}>
        <DeleteBox>
          <Buttons>
            <Button el='button' onClick={handleModalClose}>
              Cancel
            </Button>
            <Button
              el='button'
              btntype='danger'
              disabled={isDeleting}
              onClick={() => deleteTag(tag.id)}
            >
              Delete
            </Button>
          </Buttons>
        </DeleteBox>
      </BasicModal>
    </>
  );
}

export default Tag;
