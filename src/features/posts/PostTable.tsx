import { usePosts } from './usePosts';

import MiniSpinner from '../../ui/MiniSpinner';
import Table from '../../ui/Table';
import PostRow from './PostRow';
import Pagination from '../../ui/Pagination';

function PostTable() {
  const { posts = [], isPending: isPostsLoading, count } = usePosts(10);

  if (isPostsLoading) return <MiniSpinner />;

  return (
    <>
      <Table columns='0.1fr 0.45fr 0.45fr 1fr 1.2fr  0.4fr 0.3fr'>
        <Table.Header>
          <div></div>
          <div>Created At</div>
          <div>Edited at</div>
          <div>Title</div>
          <div>Tags</div>
          <div>Author</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={posts}
          render={(post, index) => <PostRow key={post.id} post={post} index={index} />}
        />
        <Table.Footer>
          <Pagination count={typeof count === 'number' ? count : 0} />
        </Table.Footer>
      </Table>
    </>
  );
}

export default PostTable;
