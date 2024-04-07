import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@tiptap/react';

import { imageUploadHandler } from '../../../../utils/helpers';
import Button from '../../../Button';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export const ImageContainer = styled.div`
  width: 40rem;
  padding: 1rem;
  max-height: 27rem;
  margin: 0 auto;
  background-color: white;

  & label {
    font-size: 1.4rem !important;
  }

  & a {
    display: none;
  }

  & button {
    display: block;
    margin: 0 auto;
  }

  & .filepond--wrapper {
    min-height: 100% !important;
    min-width: 100% !important;

    & .filepond--root {
      min-height: 100% !important;
      min-width: 100% !important;
      margin-bottom: 1rem;
    }
  }

  & .filepond--drop-label {
    background-color: white;
    width: 100%;
    height: 10rem;
    border: 0.1rem solid var(--color-grey-300);
    border-style: dashed;
    border-radius: 7px;
  }
`;

function Image({ editor }: { editor: Editor }) {
  const [files, setFiles] = useState<any[]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
    }
  };

  useEffect(() => {
    async function uploadImage(image: File) {
      const url = await imageUploadHandler(image);
      setImageUrl(url);
    }

    if (files[0]) {
      uploadImage(files[0]?.file);
    }
  }, [files]);
  console.log(files[0]);
  return (
    <ImageContainer>
      <div>
        <FilePond
          name='files'
          files={files}
          acceptedFileTypes={['image/*']}
          maxFiles={1}
          fileSizeBase={1024}
          onupdatefiles={setFiles}
          labelIdle={`
        Drag & Drop your files or
        <span className='filepond--label-action'>Browse</span>
        `}
        />
      </div>
      <Button el='button' onClick={addImage}>
        Confirm
      </Button>
    </ImageContainer>
  );
}

export default Image;
