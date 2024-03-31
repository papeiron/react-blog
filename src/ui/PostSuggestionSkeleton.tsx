import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const StyledPostSuggestionSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Image = styled.div`
  width: 100%;
  height: 20rem;

  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function PostSuggestionSkeleton() {
  return (
    <StyledPostSuggestionSkeleton>
      <Image>
        <Skeleton height={'100%'} />
      </Image>
      <Content>
        <Skeleton count={2} />
        <Skeleton width={150} />
      </Content>
    </StyledPostSuggestionSkeleton>
  );
}

export default PostSuggestionSkeleton;
