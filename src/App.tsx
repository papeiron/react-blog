import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from './styles/GlobalStyle';
import { StyleSheetManager } from 'styled-components';
import { Suspense, lazy } from 'react';

// import HomePage from './pages/HomePage';
// import Dashboard from './pages/Dashboard';
// import Posts from './pages/Posts';
// import Tags from './pages/Tags';
// import Login from './pages/Login';
// import Account from './pages/Account';
// import PostPage from './pages/PostPage';
// import PageNotFound from './pages/PageNotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Posts = lazy(() => import('./pages/Posts'));
const Tags = lazy(() => import('./pages/Tags'));
const Login = lazy(() => import('./pages/Login'));
const Account = lazy(() => import('./pages/Account'));
const PostPage = lazy(() => import('./pages/PostPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import FullPageSpinner from './ui/FullPageSpinner';
import AddPost from './features/posts/AddPost';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

const routerDefinition = createRoutesFromElements(
  <Route>
    <Route index path='/' element={<HomePage />} />
    <Route path='/blog/:postName' element={<PostPage />} />
    <Route
      element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='posts' element={<Posts />} />
      <Route path='tags' element={<Tags />} />
      <Route path='account' element={<Account />} />
      <Route path='newpost' element={<AddPost />} />
    </Route>
    <Route path='signin' element={<Login />} />
    <Route path='*' element={<PageNotFound />} />
  </Route>
);

const router = createBrowserRouter(routerDefinition);

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={() => true}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <GlobalStyles />

          <Suspense fallback={<FullPageSpinner />}>
            <RouterProvider router={router} />
          </Suspense>
          <Toaster
            position='top-right'
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000
              },
              error: {
                duration: 5000
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700)'
              }
            }}
          />
        </QueryClientProvider>
      </StyleSheetManager>
    </>
  );
}

export default App;
