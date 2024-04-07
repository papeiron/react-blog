import { ReactNode } from 'react';

import ModalBox from './ModalBox';
import { Modal, ModalProps } from '@mui/material';

type BasicModalProps = {
  children: ReactNode;
  width?: string;
} & Omit<ModalProps, 'children'>;

function BasicModal({ children, width, ...props }: BasicModalProps) {
  return (
    <Modal
      style={{ zIndex: 9999 }}
      {...props}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <ModalBox width={width}>{children}</ModalBox>
    </Modal>
  );
}

export default BasicModal;
