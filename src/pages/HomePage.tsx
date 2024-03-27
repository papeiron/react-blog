import styled from 'styled-components';
import { ScrollRestoration } from 'react-router-dom';

import BlogHeader from '../ui/BlogHeader';
import Footer from '../ui/Footer';
import LatestPosts from '../features/posts/LatestPosts';
import Row from '../ui/Row';

const HomePageLayout = styled.div`
  background-color: var(--color-grey-50);
  padding-top: 2rem;
`;

const Main = styled.main`
  padding: 2rem 5rem 5rem 5rem;

  min-height: 100vh;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;
`;

function HomePage() {
  return (
    <HomePageLayout>
      <Container>
        <BlogHeader />
      </Container>
      <Main>
        <Container>
          <Row type='horizontal'>
            <Content>
              <LatestPosts />
            </Content>
          </Row>
        </Container>
      </Main>

      <Footer />

      <ScrollRestoration />
    </HomePageLayout>
  );
}

export default HomePage;
