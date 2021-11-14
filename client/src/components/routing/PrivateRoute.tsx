import React from "react";
import { RouteProps, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";


interface IProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>
  auth: {
    isAuthenticated: any;
    loading: any;
  };
}
const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) => {
  return (
    <Route 
    {...rest}
    render={(props) => isAuthenticated ? <Component {...props}/> : <Redirect to='/login' />}
/>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
