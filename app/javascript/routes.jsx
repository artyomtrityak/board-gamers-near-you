import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import RootComponent from './components/root.component';
import AppComponent from './components/app.component';
import LandingComponent from './components/landing.component';
import NotFoundComponent from './components/not-found.component';

var routes = (
  <Route handler={RootComponent} name='root' path='/'>
    <Route handler={AppComponent} name='app'>
      <Route handler={NotFoundComponent} name='user' />
      <Route handler={NotFoundComponent} name='notifications' />
    </Route>

    <DefaultRoute handler={LandingComponent} name='landing' />
    <NotFoundRoute handler={NotFoundComponent} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('react-root'));
});