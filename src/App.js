import React, { createContext, useState, useEffect, Component } from 'react';
import './App.css';
import LoginForm from './components/users/LoginForm'
import { RegisterForm } from './components/users/RegisterForm'
import { Home } from './components/home/Home'
import { NotFoundPage } from './components/NotFoundPage'
import { BrowserRouter, Route, Link, Switch, useHistory, } from 'react-router-dom';
import { withRouter } from "react-router";
import { Header } from './components/home';

const MeetupContext = createContext();
class App extends Component {
  state = {
    ha: {}
  }
  loadHome = () => {
    this.setState({
      ha: {
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user'),
        username: localStorage.getItem('username')
      }
    })
  }

  render() {
    const { ha } = this.state
    return (
      <BrowserRouter>
        <MeetupContext.Provider value={ha}>
          <MeetupContext.Consumer>
            {props => (
              props.token ? (
                <div className="header">
                  <Header />
                  <div className="topnav">
                    <Link to="/profile">{props.username}</Link>
                    <Link to="/logout">LOGOUT</Link>
                  </div>
                </div>
              )
                :
                <div className="header">
                  <Header />
                  <div className="topnav">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                  </div>
                </div>
            )}
          </MeetupContext.Consumer>
        </MeetupContext.Provider >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm loadHome={this.loadHome} />
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;


