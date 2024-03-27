import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

function PostTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: 'created_at-asc', label: 'Post Created (Newest First)' },
          { value: 'created_at-dec', label: 'Post Created (Oldest First)' },
          { value: 'modified_at-asc', label: 'Last Updated (Newest First)' },
          { value: 'modified_at-dec', label: 'Last Updated (Oldest First)' }
        ]}
      />
    </TableOperations>
  );
}

export default PostTableOperations;
