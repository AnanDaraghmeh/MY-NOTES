import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import TextInput from '../forms/TextInput';
import TextArea from '../forms/TextArea';

class NoteForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
        className="container mt-3"
      >
        <Field
          name="title"
          type="text"
          component={TextInput}
          label={this.props.inputLabel}
        />
        <Field
          name="content"
          component={TextArea}
          label={this.props.textareaLabel}
        />
        <Link
          to="/dashboard"
          className="btn grey"
          style={{ marginRight: '0.5rem' }}
        >
          Cancel
        </Link>
        <button type="submit" className="btn green">
          {this.props.submitBtnText}
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter a title!';
  }
  if (!formValues.content) {
    errors.content = 'Please enter some text!';
  }
  return errors;
};

export default reduxForm({
  form: 'noteForm',
  validate: validate
})(NoteForm);
