import { Switch, Route } from 'react-router-dom';

import HomePage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import StudyProgram from "./components/StudyProgram";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/study/:id" exact component={StudyProgram} />
    </Switch>
  );
}

export default App;
