import { JSX } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (): JSX.Element => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
