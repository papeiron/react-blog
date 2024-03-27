import { useTags } from './useTags';
import { useTag_Post } from './useTag_Post';

import Table from '../../ui/Table';
import TagRow from './TagRow';
import Pagination from '../../ui/Pagination';
import MiniSpinner from '../../ui/MiniSpinner';

const tagByPage = 5;

function TagTable() {
  const { tags, isPending: isTagsLoading, count } = useTags(tagByPage);
  const { tag_posts, isPending } = useTag_Post();

  // adding postCount to tags
  const tagsPostCount: { [key: number]: number } = {};
  if (tag_posts) {
    for (let tag_post of tag_posts) {
      if (tag_post && typeof tag_post.tagId === 'number') {
        tagsPostCount[tag_post.tagId] = (tagsPostCount[tag_post.tagId] || 0) + 1;
      }
    }
  }

  const tagsWithPostCount = [];
  if (tags !== undefined) {
    for (let tag of tags) {
      const postCount = tagsPostCount[tag.id] || 0;
      tagsWithPostCount.push({ ...tag, postCount });
    }
  }

  if (isTagsLoading || isPending) <MiniSpinner />;

  return (
    <>
      <Table columns='0.2fr 0.45fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Created At</div>
          <div>Tag</div>
          <div>Total Posts</div>
        </Table.Header>

        <Table.Body
          data={tagsWithPostCount}
          render={(tag, index) => <TagRow key={tag.id} tag={tag} index={index} />}
        />
        <Table.Footer>
          <Pagination
            count={typeof count === 'number' ? count : 0}
            itemByPage={tagByPage}
            detailsOne={true}
          />
        </Table.Footer>
      </Table>
    </>
  );
}

export default TagTable;
