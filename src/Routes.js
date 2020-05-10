import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LivesSchedule from './pages/LivesSchedule';
import LiveDetail from './pages/LiveDetails';
import LiveNew from './pages/LiveNew';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/lives" exact component={LivesSchedule} />
      <Route path="/lives/new" component={LiveNew} />
      <Route path="/lives/:id" component={LiveDetail} />
    </Switch>
  </Router>
);

export default Routes;
