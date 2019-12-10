import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../components/private-route";

function Default() {
  return (
    <div>
      <h1>Hello App</h1>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Hello App Courses</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Hello Login</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Router>
        <PrivateRoute path="/app/courses" component={Courses} />
        {/* <PrivateRoute path="/app/details" component={Details} /> */}
        <Login path="/app/login" />
        <Default path="/app" />
      </Router>
    </div>
  );
};

export default App;
