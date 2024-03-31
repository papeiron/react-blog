import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import { usePosts } from './usePosts';

import PostBox from './PostBox';
import Pagination from '../../ui/Pagination';
import { PostWithTags as PostWithTagsType } from '../../types/types';
import PostBoxSkeleton from '../../ui/PostBoxSkeleton';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 4rem;
  row-gap: 7rem;

  margin-bottom: 5rem;
`;

const postByPage = 4;

function LatestPosts() {
  const { posts, isPending, count } = usePosts(postByPage) as {
    posts: PostWithTagsType[];
    isPending: boolean;
    count: number;
  };

  const skeletons = Array.from({ length: postByPage }).map((_, index) => (
    <PostBoxSkeleton key={index} />
  ));

  return (
    <section>
      <List>
        {isPending ? skeletons : posts?.map((post) => <PostBox key={post.id} post={post} />)}
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
