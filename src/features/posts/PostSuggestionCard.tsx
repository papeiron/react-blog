import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { secondDateFormatter } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import SoftText from '../../ui/SoftText';
import { Post as PostType } from '../../types/types';

const StyledPostSuggestionCard = styled.div`
  height: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 7px;

  transition: all 0.2s ease-in-out;
  object-fit: cover;
`;

type PostSuggestionCardProps = PostType;

function PostSuggestionCard({ post }: { post: PostSuggestionCardProps }) {
  const { title, slug, author, created_at, coverImage } = post;

  return (
    <StyledPostSuggestionCard>
      <Link to={`/blog/${slug}`} state={{ post }}>
        <StyledImage src={coverImage!} alt={title!} />
      </Link>

      <Content>
        <Heading as='h2'>
          <Link to={`/blog/${slug}`} state={{ post }}>
            {title}
          </Link>
        </Heading>

        <SoftText>
          {author} • {secondDateFormatter(created_at)}
        </SoftText>
      </Content>
    </StyledPostSuggestionCard>
  );
}

export default PostSuggestionCard;
