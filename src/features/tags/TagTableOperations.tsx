import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

function TagTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: 'created_at-asc', label: 'Tag Created (Newest First)' },
          { value: 'created_at-dec', label: 'Tag Created (Oldest First)' }
        ]}
      />
    </TableOperations>
  );
}

export default TagTableOperations;
