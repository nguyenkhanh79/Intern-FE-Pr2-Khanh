import Admin from "pages/Admin";
import Authentication from "pages/Authentication";
import Client from "pages/Client";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from "react-router-dom";

function MainRoute() {
    return (
        <Switch>
            <Route path="/" exact>
                <Client></Client>
            </Route>
            <Route path="/authentication">
                <Authentication></Authentication>
            </Route>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
        </Switch>
    );
}

export default MainRoute;
