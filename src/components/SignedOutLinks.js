import React from 'react';
import { connect } from 'react-redux';
import { trySignIn } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { withRouter } from 'react-router-dom';

const SignedOutLinks = props => {
  return (
    <div>
      <button
        onClick={() => props.trySignIn(props.history)}
        className="btn red"
        style={{ marginRight: '1rem' }}
      >
        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
      </button>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    { trySignIn }
  )(SignedOutLinks)
);
