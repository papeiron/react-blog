import { FormEvent, useState } from 'react';

import { useAddTags } from './useAddTags';

import { TagsInput } from 'react-tag-input-component';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';

function CreateTagForm() {
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [tagError, setTagError] = useState('');
  const { isAdding, addTags } = useAddTags();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!(selectedTags.length > 0)) {
      setTagError('This field is required.');
      return;
    }

    addTags(selectedTags);
    setSelectedTags([]);
    setTagError('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label='Add a tag' error={tagError}>
        <TagsInput
          value={selectedTags}
          onChange={setSelectedTags}
          name='tags'
          placeHolder='enter a tag'
          disabled={isAdding}
        />
      </FormRow>
      <Button el='button' disabled={isAdding}>
        Add
      </Button>
    </Form>
  );
}

export default CreateTagForm;
