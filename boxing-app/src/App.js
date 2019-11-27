import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Route, Switch } from 'react-router-dom'
import Members from './components/Members'
import UserForm from './components/UserForm'
import Events from './components/Events'
import Home from './components/Home'

class App extends Component{
  render(){
    return (
      <div>
      <Navigation name='Gideon Boxing'/>
        <Switch>
          <Route exact path='/home' render= { ()=> (
            <Home />
          )}/>

          <Route exact path='/members' render= { ()=> (
            <Members />
          )}/>

          <Route exact path='/events' render= { ()=> (
            <Events />
          )}/>

          <Route exact path='/form' render= { ()=> (
            <UserForm />
          )}/>
        </Switch>  
        </div>  
    )
  }
}

export default App;
