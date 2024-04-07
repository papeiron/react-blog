import styled from 'styled-components';
import { ReactNode } from 'react';

import ModalBox from './ModalBox';
import { Modal, ModalProps } from '@mui/material';

const StyledFormModal = styled(Modal)`
  width: 60.5%;
  margin: 0 auto;
  border-radius: var(--border-radius-md);
`;

const StyledModalBox = styled(ModalBox)`
  overflow-y: scroll;
`;

type FormModalProps = {
  children: ReactNode;
  width?: string;
} & Omit<ModalProps, 'children'>;

function FormModal({ children, width, ...props }: FormModalProps) {
  return (
    <StyledFormModal {...props} aria-labelledby='modal-title' aria-describedby='modal-description'>
      <StyledModalBox width={width}>{children}</StyledModalBox>
    </StyledFormModal>
  );
}

export default FormModal;
