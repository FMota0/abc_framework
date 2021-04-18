import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import HomePage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import ResearchProgram from "./components/ResearchProgram";
import ServerSleeping from "./components/ServerSleeping";
import { getHealth } from './store/health/actions';
import { getHealthState, hasRecentHealth } from './store/health/selectors';
import { history } from './history';

function App() {
  const dispatch = useDispatch();
  const hasHealth = useSelector(hasRecentHealth);
  useEffect(() => {
    if (!hasHealth)
      dispatch(getHealth());
  }, [dispatch, hasHealth]);
  const health = useSelector(getHealthState);

  if (!hasHealth) {
    return (
      <ServerSleeping />
    )
  }

  if (health.isBroken) {
    // TODO
  }

  const token = localStorage.getItem("authToken");

  if (!token) {
    return <HomePage />
  }

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/research/:id" exact component={ResearchProgram} />
      <Route path="*" 
        render={
          () => {
            history.push("/");
            return null;
          }
        } 
      />
    </Switch>
  );
}

export default App;
