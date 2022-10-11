import { Route, Routes } from 'react-router';

import Capture from './Capture';
import Menu from './Menu';
import Process from './process';
import Engage from './engage';
import HomeButton from './HomeButton';
import { CaptureItemsContextProvider } from './data/capture-items/CaptureItemsContext';
import { TasksContextProvider } from './data/tasks/TasksContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <CaptureItemsContextProvider>
        <TasksContextProvider>
          <header className="App-header">
            <HomeButton />
            <Routes>
              <Route path="capture" element={<Capture />} />
              <Route path="process/*" element={<Process />} />
              <Route path="engage/*" element={<Engage />} />
              <Route path="*" element={<Menu />} />
            </Routes>
          </header>
        </TasksContextProvider>
      </CaptureItemsContextProvider>
    </div>
  );
}

export default App;
