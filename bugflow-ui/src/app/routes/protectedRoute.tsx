import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';
import { JSX } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const user = useAuthStore((state) => state.user);
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
