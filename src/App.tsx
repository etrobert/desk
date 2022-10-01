import './App.css';
import { Route, Routes } from 'react-router';
import Capture from './Capture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path={'capture'} element={<Capture />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
