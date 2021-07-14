import Admin from "pages/Admin";
import Authentication from "pages/Authentication";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Client from "pages/Client";
import { ROOT_PATH, SIGN_IN_PATH, ADMIN_PATH } from "constant/route";

function MainRoute() {
    return (
        <Switch>
            <Route path={SIGN_IN_PATH}>
                <Authentication></Authentication>
            </Route>
            <Route path={ADMIN_PATH}>
                <Admin></Admin>
            </Route>
            <Route path={ROOT_PATH}>
                <Client />
            </Route>
        </Switch>
    );
}

export default MainRoute;
