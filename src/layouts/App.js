import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

// components

import Sidebar from "../components/Sidebar/Sidebar";
import AppNavbar from "../components/Navbars/AppNavbar";


// views

import Home from "../views/app/Home";
import Profile from "../views/app/Profile";

export default function App() {

    let history = useHistory();

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AppNavbar />
                <div className=" mx-auto -m-24">
                    <Switch>
                        <Route path="/app/home" exact component={Home} />
                        <Route path="/app/profile" exact component={Profile} />
                        <Redirect from="/app" to="/app/home" />
                    </Switch>
                </div>
            </div>
        </>
    );
}
