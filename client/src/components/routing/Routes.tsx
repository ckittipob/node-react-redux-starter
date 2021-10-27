import React, { useContext } from "react";
import { Route, Switch, RouteComponentProps, withRouter } from "react-router-dom";
import Examples from "../example/examples/Examples";
import Example from "../example/example/Example";
import ExampleForm from "../example/example-forms/ExampleForm";
import Login from "../example/auth/LoginForm";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Protected from "../example/auth/Protected";
import Modal from "../example/common/Modal";


const Routes: React.FC<RouteComponentProps> = (props: any, { location }) => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/examples" component={Examples} />
      <Route exact path="/example/:id" component={Example} />
      <PrivateRoute
        path={["/new-example", "/edit-example/:id"]}
        component={ExampleForm}
      />
      <Route exact path="/modal" component={Modal} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
