import { useState } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import { Main } from './components/Main/Main';
import { Navigator } from './components/Navigator/Navigator';

function App() {

  return (
    <Switch>
      <Route exact path='/' component={Navigator} />
      <Route path='/i' component={Main} />
      <Route path='/kp' component={Main} />
    </Switch>
  );
}

export default App;
