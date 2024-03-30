import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Post as PostType } from '../../types/types';

const StyledRecentPost = styled.div`
  display: flex;
  gap: 1rem;

  max-width: 38rem;

  @media only screen and (max-width: 1200px) {
    width: auto;
  }
`;

const Image = styled.img`
  width: 7rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 7px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(101%);
  }
`;

const StyledLink = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type RecentPostProps = PostType;

function RecentPost({ post }: { post: RecentPostProps }) {
  return (
    <StyledRecentPost>
      <Link to={`/blog/${post.slug}`} state={{ post }}>
        <Image src={post.coverImage as string} />
      </Link>
      <StyledLink to={`/blog/${post.slug}`} state={{ post }}>
        {post.title}
      </StyledLink>
    </StyledRecentPost>
  );
}

export default RecentPost;
