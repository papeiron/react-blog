import styled from 'styled-components';

import SoftText from '../../ui/SoftText';
import BackButton from '../../ui/BackButton';
import { countWords, secondDateFormatter } from '../../utils/helpers';
import { PostWithTags, Tag as TagType } from '../../types/types';
import Tag from '../../ui/Tag';
import Heading from '../../ui/Heading';
import Tags from '../../ui/Tags';
import MDEditor from '@uiw/react-md-editor';

import { FcBusinessman } from 'react-icons/fc';
import { FcAlarmClock } from 'react-icons/fc';
import { FcCalendar } from 'react-icons/fc';
import MiniSpinner from '../../ui/MiniSpinner';

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
`;

const StyledMarkdown = styled(MDEditor.Markdown)`
  background-color: var(--color-grey-0);
  font-family: inherit;
  color: inherit;

  line-height: 1.9;

  & img {
    border-radius: 7px;
  }

  & p {
    color: var(--color-text);
  }

  & li {
    list-style-type: disc;
    color: var(--color-text);
  }

  & blockquote {
    border-color: var(--color-red-100);
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
`;

const BackButtonContainer = styled.div`
  position: absolute;
  left: -30%;
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
    width: 2rem;
    height: 2rem;
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
    /* border-bottom: 0.5px solid var(--color-bg); */

    &:after {
      content: '';
      background: var(--color-grey-200);
      position: absolute;
      width: 36rem;
      height: 1px;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  & > ${Tags} {
    margin: 0 auto;
  }
`;

type PostProps = {
  post: PostWithTags;
  isPending: boolean;
};

function Post({ post, isPending }: PostProps) {
  if (isPending) return <MiniSpinner />;

  const { created_at, title, content, coverImage, author, tags } = post;

  return (
    <StyledPost>
      <PostHeader>
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
      </PostHeader>

      <Image>
        <img src={coverImage || ''} alt={title || ''} />
      </Image>

      <PostHeaderContainer>
        <Tags>
          {tags?.map((tag: TagType) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </Tags>

        <Heading as='h5'>{title}</Heading>

        <PostMeta>
          <div>
            <FcBusinessman />
            <SoftText>{author}</SoftText>
          </div>
          •
          <div>
            <FcCalendar />
            <SoftText>{secondDateFormatter(created_at)}</SoftText>
          </div>
          •
          <div>
            <FcAlarmClock />
            <SoftText>{countWords(content || '')} mins</SoftText>
          </div>
        </PostMeta>
      </PostHeaderContainer>

      <StyledMarkdown source={content || ''} />
    </StyledPost>
  );
}

export default Post;
