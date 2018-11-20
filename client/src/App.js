import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile'
import User from './components/User'
import List from './components/List'
import Games from './components/Games'







class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar/>
        <Switch>
        <Route exact path= "/login" component ={LogIn}/>
        <Route exact path= "/users/"  component ={User}/>
        <Route exact path= "/users/:userId"  component ={Profile}/>
        <Route exact path= "/users/:userId/lists" component ={List}/>
        <Route exact path= "/games" component ={Games}/>
        <Route path= "/" component ={Home}/>

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
