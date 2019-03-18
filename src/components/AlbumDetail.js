import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText
} from "mdbreact";
import Lightbox from "react-image-lightbox";
import { connect } from "react-redux";
import "../index.css";
import { fetchPhotos } from "../actions";

class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.match.params.albumId);
  }

  getImage(photoIndex) {
    return this.props.photos.map((photo, index) => {
      if (index === photoIndex) {
        return photo.url;
      } else {
        return null;
      }
    });
  }

  renderPhotos() {
    return this.props.photos.map((photo, index) => {
      return (
        <MDBCol>
          <MDBCard
            style={{ width: "150px", margin: "1rem", cursor: "pointer" }}
            onClick={() => this.setState({ photoIndex: index, isOpen: true })}
          >
            <MDBCardBody>
              <figure>
                <img
                  src={photo.thumbnailUrl}
                  alt="Gallery"
                  className="img-fluid"
                />
              </figure>
              <MDBCardText style={{ fontSize: "11px" }}>
                {photo.title}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>{this.renderPhotos()}</MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex]}
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length]
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ]
            }
            imageTitle={photoIndex + 1 + "/" + this.props.images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    images: state.photos.map(photo => photo.url)
  };
};

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(AlbumDetail);
