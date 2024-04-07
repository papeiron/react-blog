import styled from 'styled-components';
import Heading from '../../ui/Heading';
import CreateTagForm from './CreateTagForm';

const StyledAddTag = styled.div`
  width: 82rem;
  padding-bottom: 20rem;
`;

function AddTag() {
  return (
    <StyledAddTag>
      <Heading as='h1'>Add a tag</Heading>
      <CreateTagForm />
    </StyledAddTag>
  );
}

export default AddTag;
