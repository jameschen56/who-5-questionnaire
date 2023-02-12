import React from 'react';
import { Route, Switch } from "react-router-dom";
import RadioApp from './component/RadioApp';
import ResponseApp from './component/ResponseApp';
import './App.css';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <RadioApp />
        </Route>
        <Route exact path='/qestionnaire'>
          <ResponseApp />  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
