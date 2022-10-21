import { CaptureItemsContextProvider } from './data/capture-items/CaptureItemsContext';
import { TasksContextProvider } from './data/tasks/TasksContext';
import LandingPage from './LandingPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <CaptureItemsContextProvider>
        <TasksContextProvider>
          <LandingPage />
        </TasksContextProvider>
      </CaptureItemsContextProvider>
    </div>
  );
}

export default App;
