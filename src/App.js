import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Index from './pages/principal/Index';
import Trips from './pages/trips/Trips';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Index}/>
          <Route path='/trips' exact component={Trips}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
