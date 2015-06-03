import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import {AppComponent, MapComponent, LandingComponent, NotFoundComponent} from './modules/map';

//NB: get Routes from modules and pass as {ModuleARoutes}
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