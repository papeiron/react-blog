import { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';

import FileInput from './FileInput';
import FormRow from './FormRow';
import Button from './Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { imageUploadHandler } from '../utils/helpers';

const StyledImageUrlGetter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledImageUrl = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;
  cursor: pointer;
`;

function ImageUrlGetter() {
  const [imgUrl, setImgUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const image = fileInputRef.current?.files?.[0];
    if (!image) return;
    const url = await imageUploadHandler(image);
    setImgUrl(url);
  }

  return (
    <StyledImageUrlGetter>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FileInput ref={fileInputRef} id='image' accept='image/*' />
        </FormRow>
        <Button el='button'>Get url</Button>
      </form>
      <CopyToClipboard text={imgUrl} onCopy={() => toast.success('URL copied.')}>
        <StyledImageUrl>{imgUrl}</StyledImageUrl>
      </CopyToClipboard>
    </StyledImageUrlGetter>
  );
}

export default ImageUrlGetter;
