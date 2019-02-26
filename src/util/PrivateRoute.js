import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default withRouter(connect(mapStateToProps)(PrivateRoute));
