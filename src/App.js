import './App.css';
import Portfolio from './components/portfolio';
import { ActiveProvider } from './components/sidebarActiveContext';

function App() {
  return (
    <div className="App">
      <ActiveProvider>
        <Portfolio />
      </ActiveProvider>
    </div>
  );
}

export default App;
