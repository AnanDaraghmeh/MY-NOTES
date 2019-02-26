import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import { createNote } from '../../store/actions';
import moment from 'moment';

class NewNote extends React.Component {
  onFormSubmit = formValues => {
    const noteTimestamp = moment().format();
    this.props.createNote(formValues, noteTimestamp);
  };

  render() {
    return (
      <NoteForm
        onFormSubmit={this.onFormSubmit}
        inputLabel="Enter note title"
        textareaLabel="Enter your note"
        submitBtnText="Save"
      />
    );
  }
}

export default connect(
  null,
  { createNote: createNote }
)(NewNote);
