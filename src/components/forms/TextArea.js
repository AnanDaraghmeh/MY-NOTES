import React from 'react';

const TextInput = ({ input, meta: { touched, error }, label }) => {
  return (
    <div className="section">
      <label>{label}</label>
      <input {...input} className="materialize-textarea" />
      {touched && error && <div className="card-panel red">{error}</div>}
    </div>
  );
};

export default TextInput;
