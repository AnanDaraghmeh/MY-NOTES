import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SpinnerBtn = () => {
  return (
    <div className="teal" style={{ marginRight: '2rem' }}>
      <FontAwesomeIcon icon={faSpinner} className="spinnerIcon" size="lg" />
    </div>
  );
};

export default SpinnerBtn;
