import styled from 'styled-components';

import { usePosts } from './usePosts';

import PostSuggestionCard from './PostSuggestionCard';
import Heading from '../../ui/Heading';
import PostSuggestionSkeleton from '../../ui/PostSuggestionSkeleton';

const StyledPostSuggestions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 1rem;
  margin-bottom: 3rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const postBypage = 2;

function PostSuggestions() {
  const { posts, isPending } = usePosts(postBypage);

  const skeletons = Array.from({ length: postBypage }).map((_, index) => (
    <PostSuggestionSkeleton key={index} />
  ));

  return (
    <div>
      <Heading as='h2'>Suggestion Posts</Heading>
      <StyledPostSuggestions>
        {isPending
          ? skeletons
          : posts?.map((post) => <PostSuggestionCard key={post.id} post={post} />)}
      </StyledPostSuggestions>
    </div>
  );
}

export default PostSuggestions;
