import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  // const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);

  // const searchUsers = async text => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // const getUser = async username => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `
  //   );
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // const getUserRepos = async username => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `
  //   );
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  // const showAlert = (message, type) => {
  //   setAlert({ message, type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 5000);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert //alert={alert}
              />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home}
                  // render={props => (
                  //   <Fragment>
                  //     <Search
                  //     //searchUsers={searchUsers}
                  //     //clearUsers={clearUsers}
                  //     //showClear={users.length > 0 ? true : false}
                  //     //setAlert={showAlert}
                  //     />
                  //     <Users
                  //     //users={users}
                  //     //loading={loading}
                  //     />
                  //   </Fragment>
                  // )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  component={User}
                  // render={props => (
                  //   <User
                  //     {...props}
                  //     //getUser={getUser}
                  //     //getUserRepos={getUserRepos}
                  //     //repos={repos}
                  //     //user={user}
                  //     //loading={loading}
                  //   />
                  // )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
