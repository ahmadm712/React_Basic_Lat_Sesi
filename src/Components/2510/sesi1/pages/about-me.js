import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation
  
} from "react-router-dom";
import HobbyPage from "./hobby-page";
import ProfilPage from "./profil-page";

export default function AboutMePage() {
  let { path, url } = useRouteMatch();
  let history = useHistory()
  let query = useQuery()

  function useQuery() {
      return 
  }

  function handleClick() {
      history.push('/')
  }
  console.log(useRouteMatch());
  return (
    <>
      <h1>About me</h1>
      <ul>
        <li>
          <Link to={`${url}/profile/sekolah`}>Profile</Link>
        </li>
        <li>
          <Link to={`${url}/hobby`}>Hobby</Link>
        </li>
      </ul>
      <button onClick={handleClick} className='btn btn-primary m-2'>Back</button>

      <Switch>
        <Route path={`${path}/profile/:list_profile`}>
          <ProfilPage />
        </Route>
        <Route path={`${path}/hobby`}>
          <HobbyPage />
        </Route>
        <Route >

        </Route>
      </Switch>
    </>
  );
}
