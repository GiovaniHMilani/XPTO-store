import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Exclusivos from './pages/Exclusivos';
import Promocao from './pages/Promocao';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/exclusivos">
        <Exclusivos />
      </Route>
      <Route exact path="/promocao">
        <Promocao />
      </Route>
    </Switch>
  );
}
