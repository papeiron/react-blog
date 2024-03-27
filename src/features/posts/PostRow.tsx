import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { dateFormatter } from '../../utils/helpers';

import { useDeletePost } from './useDeletePost';

import Table from '../../ui/Table';
import OptionsButton from '../../ui/OptionsButton';
import BasicModal from '../../ui/BasicModal';
import Tag from '../../ui/Tag';
import CreatePostForm from './CreatePostForm';
import Button from '../../ui/Button';
import SoftText from '../../ui/SoftText';
import DeleteBox from '../../ui/DeleteBox';
import Tags from '../../ui/Tags';
import FormModal from '../../ui/FormModal';
import Heading from '../../ui/Heading';
import { PostWithTags, Tag as TagType } from '../../types/types';
import { Menu, MenuItem } from '@mui/material';

import { SlOptionsVertical } from 'react-icons/sl';

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const StyledTags = styled(Tags)`
  font-size: 1.6rem;
`;

export type PostRowProps = {
  post: PostWithTags;
  index: number | undefined;
};

const StyledMenu = styled(Menu)`
  & ul {
    padding: 0;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 1rem 3rem;
`;

function PostRow({ post, index }: PostRowProps) {
  const { id: postId, created_at, modified_at, title, author } = post;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { deletePost, isDeleting } = useDeletePost();

  const tags = post.tags;

  // modal
  const handleModalOpen = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // modal 2
  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
    setAnchorEl(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  // menu
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // post operations
  const handleDelete = () => {
    deletePost(postId);
  };

  return (
    <Table.Row>
      <div>{index !== undefined ? index + 1 : '-'}</div>
      <SoftText>{dateFormatter(created_at)}</SoftText>
      <SoftText>{modified_at ? dateFormatter(modified_at) : '-'}</SoftText>
      <div>{title}</div>
      {tags.length > 0 ? (
        <StyledTags>
          {tags?.map((tag: TagType) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </StyledTags>
      ) : (
        <div>-</div>
      )}

      <div>{author}</div>
      <div>
        <OptionsButton onClick={handleMenuClick}>
          <SlOptionsVertical />
        </OptionsButton>

        <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <StyledMenuItem onClick={handleModalOpen}>Edit</StyledMenuItem>
          <StyledMenuItem onClick={handleDeleteModalOpen}>Delete</StyledMenuItem>
        </StyledMenu>

        <FormModal open={modalOpen} onClose={handleModalClose}>
          <Heading as='h1'>Edit Form</Heading>
          <CreatePostForm postToEdit={post} tagsToEdit={tags} />
        </FormModal>

        <BasicModal width='40rem' open={deleteModalOpen} onClose={handleDeleteModalClose}>
          <DeleteBox>
            <Buttons>
              <Button el='button' onClick={handleDeleteModalClose}>
                Cancel
              </Button>
              <Button el='button' btntype='danger' disabled={isDeleting} onClick={handleDelete}>
                Delete
              </Button>
            </Buttons>
          </DeleteBox>
        </BasicModal>
      </div>
    </Table.Row>
  );
}
//
export default PostRow;
