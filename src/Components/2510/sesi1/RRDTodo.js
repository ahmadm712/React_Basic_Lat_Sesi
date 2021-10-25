import React from "react";
import CreatePage from "./pages/create-page";
import ListPage from "./pages/list-page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import InfoPage from "./pages/info-page";
import UpdatePage from "./pages/update-page";
import NotFoundPage from "./pages/not-found";

export default function RRDTodo() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Todo</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <ListPage />
        </Route>

        <Route path="/list">
          <Redirect to="/" />
        </Route>

        <Route path="/create">
          <CreatePage />
        </Route>

        <Route path="/update">
          <UpdatePage />
        </Route>

        <Route path="/info">
          <InfoPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
