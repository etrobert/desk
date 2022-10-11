import { Route, Routes } from 'react-router';

import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';
import { CaptureItemsContextProvider } from './data/CaptureItemsContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <CaptureItemsContextProvider>
        <header className="App-header">
          <HomeButton />
          <Routes>
            <Route path="capture" element={<Capture />} />
            <Route path="process/*" element={<Process />} />
            <Route path="engage/*" element={<Engage />} />
            <Route path="*" element={<Menu />} />
          </Routes>
        </header>
      </CaptureItemsContextProvider>
    </div>
  );
}

export default App;
