import styled from 'styled-components';

import { usePosts } from './usePosts';

import MiniSpinner from '../../ui/MiniSpinner';
import PostSuggestionCard from './PostSuggestionCard';
import Heading from '../../ui/Heading';

const StyledPostSuggestions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 1rem;
  margin-bottom: 3rem;
  gap: 2rem;
`;

function PostSuggestions() {
  const { posts, isPending } = usePosts(2);

  if (isPending) return <MiniSpinner />;

  return (
    <div>
      <Heading as='h2'>Suggestion Posts</Heading>
      <StyledPostSuggestions>
        {posts?.map((post) => (
          <PostSuggestionCard key={post.id} post={post} />
        ))}
      </StyledPostSuggestions>
    </div>
  );
}

export default PostSuggestions;
