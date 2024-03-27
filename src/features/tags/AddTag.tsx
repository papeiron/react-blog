import Heading from '../../ui/Heading';
import CreateTagForm from './CreateTagForm';

function AddTag() {
  return (
    <div>
      <Heading as='h1'>Add a tag</Heading>
      <CreateTagForm />
    </div>
  );
}

export default AddTag;
