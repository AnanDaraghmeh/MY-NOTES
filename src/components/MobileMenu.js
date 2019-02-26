import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { trySignOut, trySignIn } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.sideNavRef = React.createRef();
  }

  componentDidMount() {
    M.Sidenav.init(this.sideNavRef.current);
  }

  render() {
    const {
      isSignedIn,
      trySignIn,
      userName,
      userEmail,
      userPhoto,
      trySignOut
    } = this.props;
    return (
      <ul className="sidenav" ref={this.sideNavRef} id="mobile-menu">
        {isSignedIn ? (
          <div>
            <li>
              <div className="user-view">
                <div className="background teal darken-2" />
                <NavLink to="/profile" className="sidenav-close">
                  <img className="circle" src={userPhoto} alt="user profile" />
                </NavLink>
                <NavLink to="/profile" className="sidenav-close">
                  <span className="white-text name">{userName}</span>
                </NavLink>
                <NavLink to="/profile" className="sidenav-close">
                  <span className="white-text email">{userEmail}</span>
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink
                className="sidenav-close"
                to="/dashboard"
                activeClassName=" grey lighten-3"
              >
                All Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidenav-close"
                to="/profile"
                activeClassName=" grey lighten-3"
              >
                Settings
              </NavLink>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <NavLink
                to="/"
                className="sidenav-close"
                onClick={() => trySignOut()}
              >
                Sign Out
              </NavLink>
            </li>
          </div>
        ) : (
          <li>
            <NavLink
              to="/dashboard"
              className="sidenav-close"
              onClick={() => trySignIn()}
            >
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ marginRight: '0.2rem' }}
              />{' '}
              Sign in with Google
            </NavLink>
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.auth.displayName,
    userEmail: state.auth.userEmail,
    userPhoto: state.auth.userPhoto,
    isSignedIn: state.auth.isSignedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { trySignOut, trySignIn }
  )(MobileMenu)
);
