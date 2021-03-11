import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import BuyerForm from './BuyerForm';
import GroupForm from './GroupForm';
import HouseForm from './HouseForm';
import Results from './Results';

const Routes = () => {
  return (
    <Router history={history}>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/people' component={BuyerForm} />
      <Route exact path='/group' component={GroupForm} />
      <Route exact path='/house' component={HouseForm} />
      <Route exact path='/results' component={Results} />
      {/* <Route path='' component={ErrorPage} /> */}
    </Router>
  );
};

export default Routes;
