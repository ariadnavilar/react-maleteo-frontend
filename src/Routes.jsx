import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterViewPage from "./pages/sharedpages/loginregisterpages/pages/RegisterViewPage/RegisterViewPage";
import HomePage from "./pages/sharedpages/HomePage/HomePage";
import LoginViewPage from "./pages/sharedpages/loginregisterpages/pages/LoginViewPage/LoginViewPage";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/register'><RegisterViewPage/></Route>
                <Route path='/login'><LoginViewPage/></Route>
                <Route path='/'><HomePage/></Route>
            </Switch>
        </Router>
    );
}

export default Routes;
