import React from 'react';
import { connect } from 'react-redux';
import { trySignOut } from '../store/actions';
import { NavLink, withRouter } from 'react-router-dom';

class SignedInLinks extends React.Component {
  onImageclick = () => {
    this.props.history.push('/profile');
  };
  render() {
    return (
      <div>
        <li>
          <NavLink to="/dashboard" activeClassName="teal darken-2">
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="teal darken-2">
            <div>{this.props.userName}</div>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => this.props.trySignOut(this.props.history)}
            className="btn red"
            style={{ margin: '0 1rem' }}
          >
            Sign out
          </button>
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.auth.displayName,
    userEmail: state.auth.userEmail,
    userPhoto: state.auth.userPhoto
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { trySignOut }
  )(SignedInLinks)
);
