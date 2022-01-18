import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/pages/Home'
import Product from './components/pages/Product'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={Product} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
