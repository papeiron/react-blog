import styled from 'styled-components';
import Tag from './Tag';
import MiniSpinner from './MiniSpinner';
import { useTagsWithoutPagination } from '../features/tags/useTagsWithoutPagination';
import { useTag_Post } from '../features/tags/useTag_Post';
import { Tag as TagType } from '../types/types';

const StyledTagList = styled.ul`
  padding: 1rem;

  & div {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const P = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

function TagList() {
  const { tags, isPending } = useTagsWithoutPagination();
  const { tag_posts, isPending: isPending2 } = useTag_Post();

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

  type ArrTagType = TagType;

  const zeroSix: Array<ArrTagType> = [];
  const sixOne: Array<ArrTagType> = [];
  const oneFive: Array<ArrTagType> = [];

  tagsWithPostCount.forEach((post) => {
    const postDate = new Date(post.created_at);
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - postDate.getFullYear();
    const monthDiff = currentDate.getMonth() - postDate.getMonth();

    const total = yearDiff * 12 + monthDiff;

    if (total <= 6) zeroSix.push(post);
    else if (total > 6 && total <= 12) sixOne.push(post);
    else oneFive.push(post);
  });

  if (isPending || isPending2) return <MiniSpinner />;

  return (
    <>
      <StyledTagList>
        <P>0 - 6 months</P>
        <div>
          {zeroSix?.map((tag) => (
            <Tag key={tag.id} tag={tag} withDel={true} count={true} />
          ))}
        </div>
      </StyledTagList>

      <StyledTagList>
        <P>6 months - 1 year</P>

        {sixOne?.map((tag) => (
          <Tag key={tag.id} tag={tag} withDel={true} count={true} />
        ))}
      </StyledTagList>

      <StyledTagList>
        <P>1 year - 5 years</P>

        {oneFive?.map((tag) => (
          <Tag key={tag.id} tag={tag} withDel={true} count={true} />
        ))}
      </StyledTagList>
    </>
  );
}

export default TagList;
