import styled from 'styled-components';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../features/authentication/useUser';

import MiniSpinner from './MiniSpinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isPending } = useUser();
  const isAuthenticated = user?.role == 'authenticated';
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate('/signin');
  }, [isAuthenticated, isPending, navigate]);

  if (isPending) {
    return (
      <FullPage>
        <MiniSpinner />
      </FullPage>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
