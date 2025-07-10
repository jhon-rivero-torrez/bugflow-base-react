// components/Layout.tsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
    </nav>
    <hr />
    <Outlet /> {/* This renders the nested route */}
  </div>
);

export default Layout;
