import React from "react";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import { fetchAlbums } from "../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  generateCard(album, index) {
    return (
      <MDBCard style={{ width: "18rem" }} key={album.id}>
        <UserHeader userId={album.userId} />
        <MDBCardImage
          className="img-fluid"
          src={`https://via.placeholder.com/288x192/${album.id}000FF/808080`}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>Album {index + 1}</MDBCardTitle>
          <MDBCardText>{album.title}</MDBCardText>
          <Link to={`/album/${album.id}`}>
            <MDBBtn color="indigo">View album</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    );
  }

  renderList() {
    return this.props.albums.map((album, index) => {
      return (
        <MDBCol style={{ padding: "1rem" }}>
          {this.generateCard(album, index)}
        </MDBCol>
      );
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>{this.renderList()}</MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return { albums: state.albums };
};

export default connect(
  mapStateToProps,
  { fetchAlbums }
)(AlbumList);
