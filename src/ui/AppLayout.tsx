import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

import FakeDataUploader from './FakeDataUploader';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar header header'
    'sidebar main main'
    'sidebar main main';

  grid-template-columns: 0.5fr 3fr 3fr;
  grid-template-rows: 1fr 7fr 7fr;

  height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  background-color: var(--color-grey-50);
  padding: 5rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <FakeDataUploader />
      <ScrollRestoration />
    </StyledAppLayout>
  );
}

export default AppLayout;
