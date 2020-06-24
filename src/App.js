import React from 'react';
import './App.css';
import { LoginForm } from './components/users/LoginForm'
import { RegisterForm } from './components/users/RegisterForm'
import { HomePage } from './components/home/HomePage'
import { NotFoundPage } from './components/NotFoundPage'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <div className="dashboard"><Link to="/">Home</Link></div>
        <div className="dashboard"><Link to="/login">Login</Link></div>
        <div className="dashboard"><Link to="/register">Register</Link></div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
