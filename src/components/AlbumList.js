import React from "react";
import { connect } from "react-redux";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";
import { fetchAlbums } from "../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderList() {
    return this.props.albums.map((album, index) => {
      return (
        <MDBListGroupItem key={album.id}>
          <MDBIcon icon="images" /> {album.title}
        </MDBListGroupItem>
      );
    });
  }
  render() {
    return (
      <MDBContainer>
        <MDBListGroup>{this.renderList()}</MDBListGroup>
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
