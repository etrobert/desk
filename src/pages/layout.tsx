import { Route, Routes } from 'react-router-dom';

import AppPage from './page';

import './layout.css';

function AppLayout() {
  return (
    <div className="AppLayout">
      <Routes>
        <Route path="*" element={<AppPage />} />
      </Routes>
    </div>
  );
}

export default AppLayout;
