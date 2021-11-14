import React, { Fragment, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from './Navbar';
import Home from '../home/Home';
import {createBrowserHistory} from 'history';
import { ToastContainer } from "react-toastify";
// Redux
import { connect } from 'react-redux';

import Routes from '../routing/Routes';
import { setAppLoaded } from '../../app/actions/common';
import { getUser } from '../../app/actions/auth'
import ModalContainer from '../common/modals/ModalContainer';

export const history = createBrowserHistory();

interface IProps {
  setAppLoaded(): Promise<void>
  getUser(): Promise<void>
  isAppLoadedStore: boolean
}

const App: React.FC<IProps> = ({
  getUser,
  setAppLoaded,
  isAppLoadedStore
}) => {


  useEffect(() => {
    if (localStorage.token) {
      getUser().finally(() => setAppLoaded());
    }
    else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded])


  if (!isAppLoadedStore) return <p>Loading Page</p>
  return(
    <Router history={history}>
    <Fragment>
      <ModalContainer />
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  </Router>
  )

};

const mapStateToProps = (state: any) => ({
  isAppLoadedStore: state.common.appLoaded,
});

export default connect(mapStateToProps, {
  setAppLoaded, getUser
})(App);
