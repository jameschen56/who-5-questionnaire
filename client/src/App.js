import React from 'react';
import { Route, Switch } from "react-router-dom";
import RadioApp from './component/RadioApp';
import ResponseApp from './component/ResponseApp';
import './App.css';

function App() {

  return (
    <div>
      <Route path='/'>
        <RadioApp />
      </Route>
      <Route path='/qestionnaire'>
        <ResponseApp />  
      </Route>
    </div>
  );
}

export default App;
