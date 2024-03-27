import styled from 'styled-components';

import { Post as PostType } from '../../types/types';

import Heading from '../../ui/Heading';
import TopPost from './TopPost';
import Row from '../../ui/Row';

const StyledTopPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type TopPostsProps = {
  posts: PostType[] | undefined;
};

function TopPosts({ posts }: TopPostsProps) {
  const latestPosts = posts?.slice(0, 5);

  return (
    <StyledTopPosts>
      <Row type='horizontal'>
        <Heading as='h2'>Top Blogs</Heading>
      </Row>
      <PostList>
        {latestPosts?.map((post) => (
          <TopPost key={post.id} post={post} />
        ))}
      </PostList>
    </StyledTopPosts>
  );
}

export default TopPosts;
