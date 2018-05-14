import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as c from '../containers';

const App = () =>
  <div>
    <Switch>
      <Route path='/' component={c.HomeContainer}/>
      <Route path='*' component={() => (<div>404</div>)}/>
    </Switch>
  </div>

export default App
