import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./Navigation";
const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        Strona główna
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);
export default App;
