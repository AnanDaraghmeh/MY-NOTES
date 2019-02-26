import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../store/actions';
import { Link } from 'react-router-dom';
import NoteCard from './notes/NoteCard';

class DashBoard extends React.Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  };

  filterCurrentUserNotes = () => {
    const userNotes = this.props.notes.filter(
      note => note.userId === this.props.currentUserId
    );
    return userNotes;
  };

  render() {
    return (
      <div className="container section">
        <div className="row">
          <NoteCard notes={this.filterCurrentUserNotes()} />
        </div>
        <div className="fixed-action-btn">
          <Link to="/note/new" className="btn-floating btn-large teal">
            <i className="material-icons">note_add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(DashBoard);
