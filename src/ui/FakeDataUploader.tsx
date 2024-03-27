import { createPortal } from 'react-dom';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';
import SoftText from './SoftText';

import { FakePostData } from '../data/FakeData';
import { uploadFakeData } from '../utils/helpers';

import { MdFileUpload } from 'react-icons/md';

const StyledFakeDataUploader = styled.div`
  position: absolute;
  left: 1%;
  bottom: 3%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function FakeDataUploader() {
  const postData = FakePostData;

  const handleFakeData = () => {
    for (let post of postData) {
      uploadFakeData({ post: post.post, tags: post.tags });
    }
  };

  return createPortal(
    <StyledFakeDataUploader>
      <SoftText>Upload fake data</SoftText>
      <ButtonIcon onClick={handleFakeData}>
        <MdFileUpload />
      </ButtonIcon>
    </StyledFakeDataUploader>,
    document.body
  );
}

export default FakeDataUploader;
