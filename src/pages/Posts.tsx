import PostTable from '../features/posts/PostTable';
import PostTableOperations from '../features/posts/PostTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from '../ui/Button';

function Posts() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All posts</Heading>
        <PostTableOperations />
      </Row>

      <Row>
        <PostTable />

        <div>
          <Button el='anchor' to='/newpost'>
            Add a new post
          </Button>
        </div>
      </Row>
    </>
  );
}

export default Posts;
