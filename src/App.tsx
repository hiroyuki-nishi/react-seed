import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './login/Login';

import './App.css';
import { Home } from './home/Home';
import { NotFound } from './error/NotFound';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Login />
          </div>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;