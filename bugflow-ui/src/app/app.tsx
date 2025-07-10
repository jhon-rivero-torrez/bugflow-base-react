// apps/bugflow-ui/src/app/app.tsx
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../pages/Layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
