import { Route, Routes } from 'react-router';

import Capture from './Capture';
import Menu from './Menu';
import Process from './Process';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="capture" element={<Capture />} />
          <Route path="process" element={<Process />} />
          <Route path="*" element={<Menu />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
