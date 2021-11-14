import React from "react";
import { Route, Switch, RouteComponentProps, withRouter } from "react-router-dom";
import Examples from "../example/examples/Examples";
import ExampleForm from "../example/example-forms/ExampleForm";
import Login from "../example/auth/LoginForm";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";



const Routes: React.FC<RouteComponentProps> = (props: any, { location }) => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/examples" component={Examples} />
      <PrivateRoute
        path={["/new-example", "/edit-example/:id"]}
        component={ExampleForm}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
