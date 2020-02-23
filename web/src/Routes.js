import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
}
