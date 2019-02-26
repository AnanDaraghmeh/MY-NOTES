import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import { editNote } from '../../store/actions';

class EditNote extends React.Component {
  onFormSubmit = formValues => {
    this.props.editNote(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <NoteForm
        onFormSubmit={this.onFormSubmit}
        inputLabel="Edit note title"
        textareaLabel="Edit note text"
        submitBtnText="Save changes"
        initialValues={this.props.initialValues}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: state.notes.filter(
      note => note.id === ownProps.match.params.id
    )[0]
  };
};

export default connect(
  mapStateToProps,
  { editNote: editNote }
)(EditNote);
