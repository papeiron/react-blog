import styled from 'styled-components';

import { usePosts } from '../features/posts/usePosts';
import { useUser } from '../features/authentication/useUser';
import { useTags } from '../features/tags/useTags';

import Box from './Box';
import Heading from './Heading';
import ActivityChart from './ActivityChart';
import MiniSpinner from './MiniSpinner';
import SoftText from './SoftText';
import Stats from './Stats';
import TopPosts from '../features/posts/TopPosts';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 3rem;

  & > * {
    max-height: 44rem;
  }

  & > *:nth-of-type(3) {
    grid-column: span 2;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

function DashboardLayout() {
  const { posts, isPending } = usePosts();
  const { user, isPending: isPending2 } = useUser();
  const { tags, isPending: isPending3 } = useTags();

  const username = user?.user_metadata.username;

  if (isPending || isPending2 || isPending3) return <MiniSpinner />;
  //
  return (
    <StyledDashboardLayout>
      <Box>
        <Heading as='h2'>{username}</Heading>
        <SoftText>writer/author</SoftText>
      </Box>
      <Stats totalPost={posts?.length ?? 0} totalTags={tags?.length ?? 0} />
      <Box>
        <Heading as='h2'>Activity</Heading>
        <ActivityChart posts={posts} />
      </Box>
      <Box>
        <TopPosts posts={posts} />
      </Box>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
