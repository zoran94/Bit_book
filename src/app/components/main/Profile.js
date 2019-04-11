import React from "react";
import * as data from "./../../../services/FetchProfile";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    data.fetchUser(this.props.match.params.id).then(user => {
      this.setState({
        user: user
      });
    });
  }

  displayUser = () => {
    const editButton =
      this.props.match.params.id == 1 ? <Button>Edit Profile</Button> : "";

    return (
      <>
        <Modal header="Modal Header" trigger={editButton}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>

        <div className="singleUser ">
          <div className="center" style={{ marginTop: " 150px" }}>
            <img src={this.state.user.avatarUrl} alt="..." />
            <h4>
              {this.state.user.firstname} {this.state.user.lastname}
            </h4>
            <p>
              <b>Bio: </b> {this.state.user.about.bio}
            </p>
            <p>
              <b>Job: </b>
              {this.state.user.about.job}
            </p>
            <div className="postComments">
              <div className="chip">
                <div className="lg-chip-icon">C</div>
                {this.state.user.posts.length} Posts
              </div>
              <div className="chip">
                <div className="lg-chip-icon">C</div>
                {this.state.user.comments.length} Comments
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    if (!this.state.user) {
      return <h2>Loading...</h2>;
    }

    return (
      <>
        <div className="container">{this.displayUser()}</div>
      </>
    );
  }
}

export default Profile;
