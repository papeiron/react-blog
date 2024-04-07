import styled from 'styled-components';

import { countWords, secondDateFormatter } from '../../utils/helpers';

import SoftText from '../../ui/SoftText';
import BackButton from '../../ui/BackButton';
import { PostWithTags, Tag as TagType } from '../../types/types';
import Tag from '../../ui/Tag';
import Heading from '../../ui/Heading';
import Tags from '../../ui/Tags';
import Skeleton from 'react-loading-skeleton';

import { FcBusinessman } from 'react-icons/fc';
import { FcAlarmClock } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
import { usePost } from './usePost';
import { EditorContent, useEditor } from '@tiptap/react';

import { useEffect } from 'react';
import { extensions } from '../../ui/TiptapEditor/TiptapEditor';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0 10rem 0;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media only screen and (max-width: 1200px) {
    position: static;
  }
`;

const Image = styled.figure`
  height: 45rem;
  width: 140%;
  position: relative;
  left: -20%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    position: static;
  }
`;

const BackButtonContainer = styled.div`
  position: absolute;
  left: -30%;

  @media only screen and (max-width: 1200px) {
    top: 2%;
    left: 3rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  & svg {
    min-width: 2rem;
    min-height: 2rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 120%;
  position: relative;
  left: -10%;

  border-radius: var(--border-radius-md);
  padding: 4rem 6rem;
  margin: 0 auto -12rem auto;
  background-color: var(--color-grey-0);
  position: relative;
  bottom: 11rem;
  text-align: center;

  & > ${Heading} {
    padding-bottom: 2rem;
    position: relative;

    &:after {
      content: '';
      background: var(--color-grey-200);
      position: absolute;
      width: 36rem;
      height: 1px;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%);

      @media only screen and (max-width: 375px) {
        width: 20rem;
      }
    }
  }

  & > ${Tags} {
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    position: static;
    max-width: 100%;
    margin-bottom: 1rem;

    padding: 1rem;
  }
`;

const Content = styled.div``;

function Post() {
  let { post, isPending } = usePost() as { post: PostWithTags; isPending: boolean };

  console.log(post);

  const editor = useEditor({
    editable: false,
    extensions: extensions
  });

  useEffect(() => {
    if (editor) {
      setTimeout(() => {
        editor.commands.setContent(post?.content || '');
      });
    }
  }, [post, editor]);

  return (
    <StyledPost>
      <PostHeader>
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
      </PostHeader>

      <figure>
        <Image>
          {isPending ? (
            <Skeleton height={450} />
          ) : (
            <img src={post.coverImage || ''} alt={post.title || ''} />
          )}
        </Image>
      </figure>

      <PostHeaderContainer>
        <Tags>
          {isPending ? (
            <>
              <Skeleton height={30} width={72} />
              <Skeleton height={30} width={72} />
            </>
          ) : (
            post.tags?.map((tag: TagType) => <Tag key={tag.id} tag={tag} />)
          )}
        </Tags>

        {isPending ? <Skeleton height={50} /> : <Heading as='h5'>{post.title}</Heading>}

        <PostMeta>
          {isPending ? (
            <Skeleton height={24} width={70} />
          ) : (
            <div>
              <FcBusinessman />
              <SoftText>{post.author}</SoftText>
            </div>
          )}
          •
          {isPending ? (
            <Skeleton height={24} width={70} />
          ) : (
            <div>
              <FcCalendar />
              <SoftText>{secondDateFormatter(post.created_at)}</SoftText>
            </div>
          )}
          •
          {isPending ? (
            <Skeleton height={24} width={70} />
          ) : (
            <div>
              <FcAlarmClock />
              <SoftText>{countWords(post.content || '')} mins</SoftText>
            </div>
          )}
        </PostMeta>
      </PostHeaderContainer>

      {isPending ? (
        <Skeleton height={1000} width={'100%'} />
      ) : (
        <Content>
          <EditorContent editor={editor} />
        </Content>
      )}
    </StyledPost>
  );
}

export default Post;
