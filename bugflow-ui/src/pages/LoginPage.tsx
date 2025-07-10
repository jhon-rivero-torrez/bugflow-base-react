import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    // Simulate login
    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginPage;
