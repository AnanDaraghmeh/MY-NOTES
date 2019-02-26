import React from 'react';
import { connect } from 'react-redux';
import DeleteNote from '../notes/DeleteNote';

class ModalManager extends React.Component {
  modalToRender = () => {
    if (this.props.currentModal === 'DeleteModal') {
      return <DeleteNote />;
    }
  };

  render() {
    return <div>{this.modalToRender()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentModal: state.modal.modalName
  };
};

export default connect(mapStateToProps)(ModalManager);
