import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import PHOTOS from "../../../../constants/mockData";
import PhotoList from "../../component/photoList";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto } from "features/photo/photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photoReducer);
  const dispatch = useDispatch();
  const handleRemove = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
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
          photoList={photos}
          onPhotoEditClick={handleEdit}
          onPhotoRemoveClick={handleRemove}
        />
      </Container>
    </div>
  );
}

export default MainPage;
