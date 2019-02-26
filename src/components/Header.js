import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import SpinnerBtn from './SpinnerBtn';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import MobileMenu from './MobileMenu';

class Header extends React.Component {
  renderGoogleButton = () => {
    if (this.props.isSignedIn === true) {
      return <SignedInLinks />;
    } else if (this.props.isSignedIn === false) {
      return <SignedOutLinks />;
    } else {
      return <SpinnerBtn />;
    }
  };

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper teal">
            <a href="#" data-target="mobile-menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <Link
              to={this.props.isSignedIn ? '/dashboard' : '/'}
              className="brand-logo"
              style={{ marginLeft: '1rem', fontWeight: 'bold' }}
            >
              MY NOTES
            </Link>
            <ul className="right hide-on-med-and-down">
              {this.renderGoogleButton()}
            </ul>
          </div>
        </nav>
        <MobileMenu />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    auth: state.auth.authObject
  };
};

export default withRouter(connect(mapStateToProps)(Header));
