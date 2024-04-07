import styled from 'styled-components';
import slug from 'slug';
import { Controller, FieldValues, FormProvider, useForm } from 'react-hook-form';

import { useUser } from '../authentication/useUser';
import { useEditPost } from './useEditPost';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import TagInput from '../tags/TagInput';
import { useCreatePost } from './useCreatePost';

import { Post as PostType, Tag as TagType } from '../../types/types';
import TextArea from '../../ui/TextArea';
import { Tag } from 'react-tag-autocomplete';
import TiptapEditor from '../../ui/TiptapEditor/TiptapEditor';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { ImageContainer } from '../../ui/TiptapEditor/Extensions/BubbleMenu/Image';

const StyledCreatePostForm = styled.div`
  position: relative;
`;

const StyledImageContainer = styled(ImageContainer)`
  width: 100%;
  min-height: 20rem;
  max-height: auto;

  & .filepond--drop-label {
    height: 20rem;
  }
`;

type CreatePostFormProps = {
  postToEdit?: PostType;
  tagsToEdit?: TagType[];
};

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

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
    const img = data.coverImage[0];

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
              wideness='100%'
              disabled={isCreating || isPostEditing}
              {...register('title', { required: 'This field is required.' })}
            />
          </FormRow>

          <FormRow label='Summary' error={errors?.summary?.message}>
            <TextArea
              id='summary'
              disabled={isCreating || isPostEditing}
              rows={7}
              wideness='100%'
              {...register('summary', { required: 'This field is required.' })}
            />
          </FormRow>

          <FormRow label='Add a cover photo' error={errors?.coverImage?.message}>
            <Controller
              name='coverImage'
              control={control}
              rules={{ required: 'This field is required.' }}
              render={({ field }) => (
                <StyledImageContainer>
                  <FilePond
                    files={field.value as any}
                    acceptedFileTypes={['image/*']}
                    maxFiles={1}
                    fileSizeBase={4096}
                    onupdatefiles={(fileItems) => {
                      field.onChange(fileItems.map((fileItem) => fileItem.file));
                    }}
                    labelIdle={`
            Drag & Drop your files or
            <span className='filepond--label-action'>Browse</span>
            `}
                  />
                </StyledImageContainer>
              )}
            />
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
                <TiptapEditor onChange={field.onChange} defaultValue={field.value} />
              )}
            />
          </FormRow>

          <Button el='button' disabled={isCreating || isPostEditing}>
            {isEditingSession ? 'Edit' : 'Add post'}
          </Button>
        </Form>
      </FormProvider>
    </StyledCreatePostForm>
  );
}

export default CreatePostForm;
