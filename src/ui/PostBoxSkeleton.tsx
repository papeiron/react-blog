import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const StyledPostBoxSkeleton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border-radius: 7px;

  height: 64rem;
`;

const Header = styled.div`
  width: 100%;
`;

const Content = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > :last-child {
    margin-top: 2rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 1.8rem;
`;

function PostBoxSkeleton() {
  return (
    <StyledPostBoxSkeleton>
      <Header>
        <Skeleton height={300} style={{ width: '100%' }} />
      </Header>
      <Content>
        <Skeleton />
        <Skeleton count={4} />
        <Tags>
          <Skeleton width={72} />
          <Skeleton width={72} />
        </Tags>
        <Skeleton width={150} />
        <Skeleton width={125} />
      </Content>
    </StyledPostBoxSkeleton>
  );
}

export default PostBoxSkeleton;
