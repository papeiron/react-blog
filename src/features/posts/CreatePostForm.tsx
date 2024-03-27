import styled from 'styled-components';
import slug from 'slug';

import MDEditor from '@uiw/react-md-editor';

import { useUser } from '../authentication/useUser';
import { useEditPost } from './useEditPost';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import ImageUrlGetter from '../../ui/ImageUrlGetter';
import Button from '../../ui/Button';
import TagInput from '../tags/TagInput';
import { useCreatePost } from './useCreatePost';
import FileInput from '../../ui/FileInput';
import { Post as PostType, Tag as TagType } from '../../types/types';
import TextArea from '../../ui/TextArea';
import { Tag } from 'react-tag-autocomplete';
import { Controller, FieldValues, FormProvider, useForm } from 'react-hook-form';

const StyledMDEditor = styled(MDEditor)`
  height: 45rem !important;

  &.w-md-editor-fullscreen {
    height: 100vh !important;
  }
`;

const StyledCreatePostForm = styled.div`
  position: relative;
`;

const CurrentImageContainerOnEdit = styled.div`
  width: 15rem;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

type CreatePostFormProps = {
  postToEdit?: PostType;
  tagsToEdit?: TagType[];
};

function CreatePostForm({ postToEdit, tagsToEdit }: CreatePostFormProps) {
  const { createPost, isPending: isCreating } = useCreatePost();
  const { editPost, isPostEditing } = useEditPost();
  const { user } = useUser();
  const isEditingSession = Boolean(postToEdit?.id);

  const methods = useForm({
    defaultValues: isEditingSession
      ? {
          title: postToEdit?.title,
          content: postToEdit?.content,
          coverImage: postToEdit?.coverImage,
          summary: postToEdit?.summary,
          tags: tagsToEdit?.map((tag) => {
            return {
              value: tag.id,
              label: tag.tagName
            };
          })
        }
      : {}
  });

  const { register, handleSubmit, reset, formState, control, getValues } = methods;
  const author = user?.user_metadata.username;
  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    const img = data.coverImage ? data.coverImage[0] : postToEdit?.coverImage;

    if (isEditingSession) {
      const tagIds = [];
      for (let tag of data.tags) {
        tagIds.push(tag.value);
      }

      const newEditPost = {
        title: data.title,
        slug: slug(data.title as string),
        summary: data.summary,
        content: data.content,
        author: author,
        coverImage: img
      };

      editPost(
        { newEditPost, editPostId: postToEdit?.id, tagIds },
        {
          onSuccess: () => {
            reset(getValues());
          }
        }
      );
    } else {
      const newPost = {
        title: data.title,
        slug: slug(data.title as string),
        summary: data.summary,
        content: data.content,
        author: author,
        coverImage: img ? img : 'null'
      };

      const tagIds = data.tags
        .filter((tag: Tag) => typeof tag.value === 'number' || typeof tag.value === 'string')
        .map((tag: Tag) => parseInt(tag.value as string));

      createPost(
        { newPost, tagIds },
        {
          onSuccess: () => {
            reset(getValues());
          }
        }
      );
    }
  }

  return (
    <StyledCreatePostForm>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)} data-color-mode='light'>
          <FormRow label='Title' error={errors?.title?.message}>
            <Input
              type='text'
              id='title'
              wideness='50%'
              disabled={isCreating || isPostEditing}
              {...register('title', { required: 'This field is required.' })}
            />
          </FormRow>

          <FormRow label='Summary' error={errors?.summary?.message}>
            <TextArea
              id='summary'
              disabled={isCreating || isPostEditing}
              rows={4}
              wideness='50%'
              {...register('summary', { required: 'This field is required.' })}
            />
          </FormRow>

          <FormRow label='Add a cover photo' error={errors?.coverImage?.message}>
            <>
              <FileInput
                id='coverImage'
                accept='image/*'
                disabled={isPostEditing}
                {...register('coverImage', {
                  required: isEditingSession ? false : 'This field is required.'
                })}
              />
              {isEditingSession && (
                <CurrentImageContainerOnEdit>
                  <img src={getValues().coverImage as string} alt='Cover Image' />
                </CurrentImageContainerOnEdit>
              )}
            </>
          </FormRow>

          <FormRow label='Tags' error={errors?.tags?.message}>
            <TagInput isCreating={isCreating || isPostEditing} />
          </FormRow>

          <FormRow label='Post' error={errors?.content?.message}>
            <Controller
              name='content'
              control={control}
              defaultValue=''
              rules={{ required: 'This field is required.' }}
              render={({ field }) => (
                <StyledMDEditor
                  value={field.value as string}
                  onChange={(value) => field.onChange(value)}
                  aria-disabled={isCreating || isPostEditing}
                />
              )}
            />
          </FormRow>

          <Button el='button' disabled={isCreating || isPostEditing}>
            {isEditingSession ? 'Edit' : 'Add post'}
          </Button>
        </Form>
      </FormProvider>
      <ImageUrlGetter />
    </StyledCreatePostForm>
  );
}

export default CreatePostForm;
