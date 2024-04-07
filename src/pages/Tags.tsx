import { useState } from 'react';
import styled from 'styled-components';

import Heading from '../ui/Heading';
import Row from '../ui/Row';
import TagList from '../ui/TagList';
import AddTag from '../features/tags/AddTag';
import TagTableOperations from '../features/tags/TagTableOperations';
import TagTable from '../features/tags/TagTable';
import Button from '../ui/Button';
import Box from '../ui/Box';
import ButtonIcon from '../ui/ButtonIcon';

import { MdOutlineRemoveRedEye } from 'react-icons/md';

const ChangeView = styled.div`
  margin: 0 0.5rem 0 auto;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function Tags() {
  const [isTagFormOpen, setIsTagFormOpen] = useState(false);
  const [tableView, setTableView] = useState(false);

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
        <div>
          <Button el='button' onClick={() => setIsTagFormOpen((prev) => !prev)}>
            Add a tag
          </Button>
        </div>
        {isTagFormOpen && <AddTag />}
      </Row>
    </>
  );
}

export default Tags;
