import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Route exact path='/' component={Home} />
        </main>
      </Router>
    </div>
  );
}

export default App;
