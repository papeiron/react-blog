import { useState } from 'react';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import TagList from '../ui/TagList';
import AddTag from '../features/tags/AddTag';
import TagTableOperations from '../features/tags/TagTableOperations';
import TagTable from '../features/tags/TagTable';
import BasicModal from '../ui/BasicModal';
import Button from '../ui/Button';
import Box from '../ui/Box';

import { MdOutlineRemoveRedEye } from 'react-icons/md';
import ButtonIcon from '../ui/ButtonIcon';
import styled from 'styled-components';

const ChangeView = styled.div`
  margin: 0 0.5rem 0 auto;
`;

function Tags() {
  const [openModal, setOpenModal] = useState(false);
  const [tableView, setTableView] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Tags</Heading>
        <ChangeView>
          <ButtonIcon onClick={() => setTableView((prev) => !prev)}>
            <MdOutlineRemoveRedEye />
          </ButtonIcon>
        </ChangeView>
        {tableView && <TagTableOperations />}
      </Row>
      {!tableView && (
        <Row>
          <Box>
            <TagList />
          </Box>
        </Row>
      )}
      <Row>
        {tableView && <TagTable />}
        <Heading as='h2'>Add a new tag</Heading>
        <div>
          <Button el='button' onClick={handleOpen}>
            Add a tag
          </Button>
        </div>
        <BasicModal open={openModal} onClose={handleClose}>
          <AddTag />
        </BasicModal>
      </Row>
    </>
  );
}

export default Tags;
