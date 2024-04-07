import { useEffect, useState } from 'react';
import { ReactTags, Tag } from 'react-tag-autocomplete';
import { Controller, useFormContext } from 'react-hook-form';

import { useTags } from './useTags';

import MiniSpinner from '../../ui/MiniSpinner';
import styled from 'styled-components';

const StyledReactTags = styled(ReactTags)`
  /* display: flex; */
`;

type SelectedTags = Tag;

type TagInputProps = {
  isCreating: boolean;
};

function TagInput({ isCreating }: TagInputProps) {
  const { tags, isPending } = useTags();
  const [suggestions, setSuggestions] = useState<SelectedTags[]>([]);
  const { control } = useFormContext();

  useEffect(() => {
    if (tags) {
      const newSuggestions = tags?.map((tag) => ({
        value: tag.id,
        label: tag.tagName as string
      }));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [tags]);

  if (isPending) return <MiniSpinner />;

  return (
    <Controller
      name='tags'
      control={control}
      defaultValue={[]}
      rules={{ required: 'This field is required.' }}
      render={({ field }) => (
        <StyledReactTags
          labelText=''
          selected={field.value}
          suggestions={suggestions}
          onAdd={(tag) => {
            field.onChange([...field.value, tag]);
          }}
          onDelete={(index) => {
            const updatedTags = [...field.value];
            updatedTags.splice(index, 1);
            field.onChange(updatedTags);
          }}
          noOptionsText='No matching tags'
          // renderTag={CustomTag}
          isDisabled={isCreating}
        />
      )}
    />
  );
}

export default TagInput;
