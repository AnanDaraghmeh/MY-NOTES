import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import { deleteNote } from '../../store/actions';

class Modal extends React.Component {
  onModalClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal('Modal');
    }
  };

  onCancelClick = () => {
    this.props.closeModal('Modal');
  };

  onDeleteClick = () => {
    this.props.deleteNote(this.props.note.id);
    this.props.closeModal('Modal');
  };

  render() {
    console.log(this.props);
    return (
      <div onClick={this.onModalClick} className="customModal animated fadeIn">
        <div className="modalContent card">
          <div className="card-content">
            <p>Are You sure that you want to delete this note?</p>
            <p style={{ fontWeight: 'bold' }}>
              {this.props.note ? this.props.note.title : null}
            </p>
          </div>
          <div className="card-action">
            <button
              onClick={this.onCancelClick}
              className="btn grey"
              style={{ marginRight: '0.5rem' }}
            >
              Cancel
            </button>
            <button onClick={this.onDeleteClick} className="btn red">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes.filter(note => note.id === state.modal.extraProps)[0]
  };
};

export default connect(
  mapStateToProps,
  { closeModal, deleteNote }
)(Modal);
