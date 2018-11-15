import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile'




class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar/>
        <Switch>
        <Route exact path= "/login" component ={LogIn}/>
        <Route exact path= "/users/:userId"  component ={Profile}/>
        <Route path= "/" component ={Home}/>

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
