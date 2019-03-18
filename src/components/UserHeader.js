import React from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCol,
  MDBCardImage,
  MDBInput
} from "mdbreact";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    } else {
      return (
        <MDBCardBody>
          <div className="content">
            <img
              src={`http://lorempixel.com/50/50/people/${user.id}/`}
              alt=""
              className="rounded-circle avatar-img z-depth-1-half"
              style={{ width: "2rem", marginRight: "1rem" }}
            />
            {user.name}
          </div>
        </MDBCardBody>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
