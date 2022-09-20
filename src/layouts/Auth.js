import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar";

// views

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

export default function Auth() {

  let history = useHistory();

  if (localStorage.getItem("activeSession")) {
    history.push("/app");
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-darkBlue-001 bg-no-repeat bg-full"></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
