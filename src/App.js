import React, { lazy, Suspense } from "react";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ROUTES from './constants/routes';

export default function App() {

  const Dashboard = lazy(() => import('./pages/dashboard'));

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}