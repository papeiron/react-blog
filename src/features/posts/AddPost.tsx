import styled from 'styled-components';

import Heading from '../../ui/Heading';
import CreatePostForm from './CreatePostForm';

const StyledAppPost = styled.div`
  overflow-y: scroll;
`;

function AddPost() {
  return (
    <StyledAppPost>
      <Heading as='h1'>Create a post</Heading>
      <CreatePostForm />
    </StyledAppPost>
  );
}

export default AddPost;
