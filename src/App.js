import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
