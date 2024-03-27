import styled from 'styled-components';
import PostBox from './PostBox';
import { usePosts } from './usePosts';
import MiniSpinner from '../../ui/MiniSpinner';
import Pagination from '../../ui/Pagination';
import { PostWithTags } from '../../types/types';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 4rem;
  row-gap: 7rem;

  margin-bottom: 5rem;
`;
// PostWithTags
const postByPage = 4;
function LatestPosts() {
  const { posts, isPending, count } = usePosts(postByPage) as {
    posts: PostWithTags[];
    isPending: boolean;
    count: number;
  };

  if (isPending) return <MiniSpinner />;

  return (
    <section>
      <List>
        {posts?.map((post) => (
          <PostBox key={post.id} post={post} />
        ))}
      </List>
      <Pagination
        detailsTwo={true}
        itemByPage={postByPage}
        count={typeof count === 'number' ? count : 0}
      />
    </section>
  );
}

export default LatestPosts;
