import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import PHOTOS from "../../../../constants/mockData";
import PhotoList from "../../component/photoList";
import "./styles.scss";

MainPage.propTypes = {};

function MainPage(props) {
  const handleRemove = (photo) => {
    console.log(photo);
  };

  const handleEdit = (photo) => {
    console.log(photo);
  };

  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.BLUE_BG}
      />
      <Container className="text-center">
        <div className="box-link">
          <Link className="link-add button" to="/photos/add">
            Add New Photo
          </Link>
        </div>
        <PhotoList
          photoList={PHOTOS}
          onPhotoEditClick={handleEdit}
          onPhotoRemoveClick={handleRemove}
        />
      </Container>
    </div>
  );
}

export default MainPage;
