import { Route, Routes } from 'react-router';

import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeButton />
        <Routes>
          <Route path="capture" element={<Capture />} />
          <Route path="process/*" element={<Process />} />
          <Route path="engage/*" element={<Engage />} />
          <Route path="*" element={<Menu />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
