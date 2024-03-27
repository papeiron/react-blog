import styled from 'styled-components';

import { dateFormatter } from '../../utils/helpers';

import Table from '../../ui/Table';
import { Tag } from '../../types/types';

type TagRowProps = {
  tag: Tag & { postCount: number };
  index: number | undefined;
};

const Soft = styled.div`
  color: var(--color-grey-500);
  font-size: 1.3rem;
`;

function TagRow({ tag, index }: TagRowProps) {
  const { created_at, tagName, postCount } = tag;

  return (
    <Table.Row>
      <div>{index !== undefined ? index + 1 : '-'}</div>

      <Soft>{dateFormatter(created_at as string)}</Soft>
      <div>{tagName}</div>
      <div>{postCount}</div>
    </Table.Row>
  );
}

export default TagRow;
