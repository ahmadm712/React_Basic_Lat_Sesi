import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LatihanAboutMe from "./pages/LatihanAboutMe";
import LatihanHome from "./pages/LatihanHome";
import LatihanTodoList from "./pages/LatihanTodoList";

export default function LatihanSesi2() {
  return (
    <Router>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/todo-list'>Todo List</Link>
            </li>
            <li>
                <Link to='/about-me'>About Me</Link>
            </li>
        </ul>
      <Switch>
        <Route exact path="/">
          <LatihanHome />
        </Route>
        <Route path='/todo-list'>
            <LatihanTodoList/>
        </Route> 
        <Route path='/about-me'>
            <LatihanAboutMe/>
        </Route>
      </Switch>
    </Router>
  );
}
