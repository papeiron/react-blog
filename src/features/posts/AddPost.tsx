import styled from 'styled-components';

import Heading from '../../ui/Heading';
import CreatePostForm from './CreatePostForm';
import Row from '../../ui/Row';

const StyledAppPost = styled.div`
  width: 82rem;
  padding-bottom: 20rem;
`;

function AddPost() {
  return (
    <StyledAppPost>
      <Row>
        <Heading as='h1'>Create a post</Heading>
      </Row>
      <Row>
        <CreatePostForm />
      </Row>
    </StyledAppPost>
  );
}

export default AddPost;
