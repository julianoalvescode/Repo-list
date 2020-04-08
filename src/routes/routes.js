import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import RepoList from '../pages/Repository';
import Error from '../pages/Error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={RepoList} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
