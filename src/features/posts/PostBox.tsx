import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Heading from '../../ui/Heading';
import SoftText from '../../ui/SoftText';
import { PostWithTags as PostWithTagsType } from '../../types/types';
import Tag from '../../ui/Tag';
import Tags from '../../ui/Tags';

import { secondDateFormatter } from '../../utils/helpers';

import { IoIosArrowRoundForward } from 'react-icons/io';

const StyledPostBox = styled.article`
  background-color: var(--color-grey-0);

  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: var(--border-radius-md);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;

  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  & svg {
    font-size: 2.3rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 6rem;
`;

const Summary = styled.div`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  color: var(--color-text);
  line-height: 1.5;
`;

const BoxFooter = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  border-top: 1px solid var(--color-grey-200);
`;

type PostProps = {
  post: PostWithTagsType;
};

function PostBox({ post }: PostProps) {
  const { created_at, title, slug, summary, coverImage, author, tags } = post;

  return (
    <StyledPostBox>
      <figure>
        <Link to={`/blog/${slug}`}>
          <StyledImage src={coverImage as string} alt={title as string} />
        </Link>
      </figure>

      <Content>
        <Heading as='h2'>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Heading>

        <Summary>{summary}</Summary>

        <Tags>
          {tags?.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </Tags>
        <SoftText>
          {author} • {secondDateFormatter(created_at)}
        </SoftText>
        <BoxFooter>
          <StyledLink to={`/blog/${slug}`}>
            <p>Read More</p>
            <IoIosArrowRoundForward />
          </StyledLink>
        </BoxFooter>
      </Content>
    </StyledPostBox>
  );
}

export default PostBox;
