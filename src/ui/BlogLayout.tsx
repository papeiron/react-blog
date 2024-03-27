import { ReactNode } from 'react';
import styled from 'styled-components';
import { ScrollRestoration } from 'react-router-dom';

import BlogHeader from './BlogHeader';
import Footer from './Footer';

const SyledBlogLayout = styled.div`
  background-color: var(--color-grey-0);
  padding-top: 2rem;

  min-height: 100vh;
`;

const Main = styled.main`
  padding: 2rem 5rem 5rem 5rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;
`;

function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <SyledBlogLayout>
      <Container>
        <BlogHeader />
      </Container>
      <Main>
        <Container>{children}</Container>
      </Main>

      <Footer />

      <ScrollRestoration />
    </SyledBlogLayout>
  );
}

export default BlogLayout;
