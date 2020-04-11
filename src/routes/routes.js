import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Repo from '../pages/Repository';
import Error from '../pages/Error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repo} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
