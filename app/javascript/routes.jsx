import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import AppComponent from './components/app.component';
import MapComponent from './components/map.component';
import LandingComponent from './components/landing.component';
import NotFoundComponent from './components/not-found.component';

var routes = (
  <Route handler={AppComponent} name="root" path="/">
    <Route handler={MapComponent} name="map" />

    <DefaultRoute handler={LandingComponent} name="landing" />

    <NotFoundRoute handler={NotFoundComponent} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('react-root'));
});