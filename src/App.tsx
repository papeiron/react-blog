import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Tags from './pages/Tags';
import AppLayout from './ui/AppLayout';

import GlobalStyles from './styles/GlobalStyle';
import Login from './pages/Login';
import ProtectedRoute from './ui/ProtectedRoute';
import Account from './pages/Account';
import PostPage from './pages/PostPage';
import { StyleSheetManager } from 'styled-components';
import PageNotFound from './pages/PageNotFound';

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

          <RouterProvider router={router} />
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
