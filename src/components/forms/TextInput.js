import React from 'react';

const TextInput = ({ input, meta: { touched, error }, type, label }) => {
  return (
    <div className="section">
      <label>{label}</label>
      <input {...input} type={type} className="input-field" />
      {touched && error && <div className="card-panel red">{error}</div>}
    </div>
  );
};

export default TextInput;
