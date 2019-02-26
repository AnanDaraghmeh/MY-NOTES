import React from 'react';
import { connect } from 'react-redux';
import { updateUserDoc } from '../store/actions';
import M from 'materialize-css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownValue: 'Select a color' };
    this.dropdownRef = React.createRef();
  }
  componentDidMount() {
    M.FormSelect.init(this.dropdownRef.current);
  }

  handleDropdownChange = e => {
    this.setState({ dropdownValue: e.target.value });
    const favColor = { favColor: e.target.value };
    this.props.updateUserDoc(favColor);
  };

  render() {
    return (
      <div className="container">
        <h5>Profile</h5>
        <div className="divider" />

        <div className="card-panel z-depth-0" style={{ paddingTop: '0.5rem' }}>
          <div className="row valign-wrapper">
            <div className="col s2">
              <img
                src={this.props.userPhoto}
                alt="user profile"
                className="circle responsive-img"
              />
            </div>
            <div className="col s10">
              <div className="black-text">
                Signed in as{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {this.props.userName}
                </span>
                <br />
                {this.props.userEmail}
              </div>
              <button
                onClick={() => this.props.trySignOut(this.props.history)}
                className="btn-small red"
                style={{ marginTop: '0.5rem' }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <br />
        <h5>Settings</h5>
        <div className="divider" />
        <div className="card-panel z-depth-0" style={{ paddingTop: '0.5rem' }}>
          <label>Change the color of your notes</label>
          <select
            className="input-field col s12"
            ref={this.dropdownRef}
            value={this.state.dropdownValue}
            onChange={this.handleDropdownChange}
          >
            <option disabled>Select a color</option>
            <option value="yellow">yellow</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <br />
        <h5>About</h5>
        <div className="divider" />
        <div className="card-panel z-depth-0" style={{ paddingTop: '0' }}>
          <p>MY NOTES &copy; 2019</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.auth.displayName,
    userEmail: state.auth.userEmail,
    userPhoto: state.auth.userPhoto,
    favColor: state.auth.favColor
  };
};

export default connect(
  mapStateToProps,
  { updateUserDoc }
)(UserProfile);
