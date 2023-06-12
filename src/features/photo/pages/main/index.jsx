import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Spinner } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import PHOTOS from "../../../../constants/mockData";
import PhotoList from "../../component/photoList";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto, getListPhoto } from "features/photo/photoThunk";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photoReducer.photos);
  const isLoading = useSelector((state) => state.photoReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemove = (photo) => {
    const action = deletePhoto(photo.id);
    dispatch(action);
  };

  useEffect(() => {
    dispatch(getListPhoto());
  }, []);

  const handleEdit = (photo) => {
    navigate(`/photos/${photo.id}`);
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
        {isLoading ? (
          <Spinner />
        ) : (
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEdit}
            onPhotoRemoveClick={handleRemove}
          />
        )}
      </Container>
    </div>
  );
}

export default MainPage;
