import React, { lazy, Suspense } from "react";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ROUTES from './constants/routes';

export default function App() {

  const Dashboard = lazy(() => import('./pages/dashboard'));
  const Application = lazy(() => import('./pages/application'));
  const Authentication = lazy(() => import('./pages/authentication'));
  const Device = lazy(() => import('./pages/device'));
  const Ecommerce = lazy(() => import('./pages/ecommerce'));
  const Visualization = lazy(() => import('./pages/visualization'));

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.APPLICATION} component={Application} />
          <Route path={ROUTES.AUTHENTICATION} component={Authentication} />
          <Route path={ROUTES.DEVICE} component={Device} />
          <Route path={ROUTES.ECOMMERCE} component={Ecommerce} />
          <Route path={ROUTES.VISUALIZATION} component={Visualization} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
        </Switch>
      </Suspense>
    </Router>
  );
}