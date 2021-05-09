import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from '@components/Header';
import HomePage from './Home';
import BlogPage from './Blog';

function Routes() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={BlogPage} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
