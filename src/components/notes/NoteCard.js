import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { openModal } from '../../store/actions/modalActions';

class NoteCard extends React.Component {
  renderCardColor = () => {
    // const cardColor = localStorage.getItem('noteCardColor');
    switch (this.props.noteColor) {
      case 'blue':
        return 'blue';
      case 'green':
        return 'green';
      case 'orange':
        return 'orange';
      default:
        return 'yellow darken-3';
    }
  };
  render() {
    return this.props.notes.map(note => {
      return (
        <div key={note.id} className="col s12">
          <div className={`card ${this.renderCardColor()} z-depth-0`}>
            <div className="card-content white-text">
              <span className="card-title" style={{ fontWeight: 'bold' }}>
                {note.title}
              </span>
              <p>{note.content}</p>
              <p
                style={{ fontSize: '0.8rem', paddingTop: '1rem' }}
                className="brown-text"
              >
                Created: {moment(note.noteTimestamp).calendar()}
              </p>
            </div>
            <div className="card-action">
              <Link
                to={`/note/edit/${note.id}`}
                className="btn grey"
                style={{ marginRight: '0.5rem' }}
              >
                Edit
              </Link>
              {/* <Link to={`/note/delete/${note.id}`} className="btn red">
                Delete
              </Link> */}
              <button
                onClick={() => {
                  this.props.openModal('DeleteModal', note.id);
                }}
                className="btn red"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    noteColor: state.auth.favColor
  };
};

export default connect(
  mapStateToProps,
  { openModal }
)(NoteCard);
