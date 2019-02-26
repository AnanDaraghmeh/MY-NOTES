import React from 'react';
import { connect } from 'react-redux';
import { trySignIn } from '../store/actions';

const Landing = ({ trySignIn }) => {
  return (
    <div className="container">
      <div className="section">
        <div className="card-panel z-depth-0">
          <h4>Your Notes!</h4>
          <p>Please sign in to start using the application.</p>
          <button onClick={() => trySignIn()} className="btn red">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { trySignIn }
)(Landing);
