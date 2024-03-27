import { useState } from 'react';

import AddPost from '../features/posts/AddPost';
import PostTable from '../features/posts/PostTable';
import PostTableOperations from '../features/posts/PostTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from '../ui/Button';
import FormModal from '../ui/FormModal';

function Posts() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All posts</Heading>
        <PostTableOperations />
      </Row>

      <Row>
        <PostTable />

        <div>
          <Button el='button' onClick={handleOpen}>
            Add a post
          </Button>
        </div>

        <FormModal open={openModal} onClose={handleClose}>
          <AddPost />
        </FormModal>
      </Row>
    </>
  );
}

export default Posts;
