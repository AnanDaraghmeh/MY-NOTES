import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import './App.css';
import React from 'react';
import Header from './components/Header';
import DashBoard from './components/DashBoard';
import NewNote from './components/notes/NewNote';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './util/PrivateRoute';
import DeleteNote from './components/notes/DeleteNote';
import EditNote from './components/notes/EditNote';
import history from './util/history';
import { connect } from 'react-redux';
import { watchAuthStatus } from './store/actions';
import Landing from './components/Landing';
import UserProfile from './components/UserProfile';
import ModalManager from './components/modals/ModalManager';

class App extends React.Component {
  componentDidMount() {
    this.props.watchAuthStatus();
  }

  render() {
    return (
      <Router history={history}>
        <>
          <Header />
          <ModalManager />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/dashboard" component={DashBoard} />
            <PrivateRoute exact path="/note/new" component={NewNote} />
            <PrivateRoute exact path="/note/edit/:id" component={EditNote} />
            <PrivateRoute
              exact
              path="/note/delete/:id"
              component={DeleteNote}
            />
            <PrivateRoute exact path="/profile" component={UserProfile} />
          </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { watchAuthStatus }
)(App);
