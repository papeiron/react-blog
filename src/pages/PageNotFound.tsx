import { FcSearch } from 'react-icons/fc';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Button from '../ui/Button';

const PageNotFoundLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 80vh;

  & div {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`;

const StyledFcSearch = styled(FcSearch)`
  width: 10rem;
  height: 10rem;
  position: absolute;

  right: -80%;
`;

const S = styled.span`
  font-size: 7.5rem;
  font-weight: 700;
  position: relative;
`;

function PageNotFound() {
  return (
    <PageNotFoundLayout>
      <S>
        404 <StyledFcSearch />
      </S>
      <div>
        <Heading as='h4'> Not Found!</Heading>
        <p>Oops! The page you're looking for couldn't be found.</p>
        <Button el='anchor' to='/'>
          Go Home
        </Button>
      </div>
    </PageNotFoundLayout>
  );
}

export default PageNotFound;
