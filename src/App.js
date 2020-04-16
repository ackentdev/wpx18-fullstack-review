import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import ReviewForm from './components/ReviewForm/ReviewForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/form" component={ReviewForm}/>
      </Switch>
    </div>
  );
}

export default App;
