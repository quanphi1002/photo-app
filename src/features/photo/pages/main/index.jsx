import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import PHOTOS from "../../../../constants/mockData";
import PhotoList from "../../component/photoList";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchphoto } from "features/photo/photoThunk";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(fetchphoto());
  }, [])



  const photos = useSelector((state) => state.photoReducer.photos);
  console.log(44444, photos);


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
          photoList={photos}
          onPhotoEditClick={handleEdit}
          onPhotoRemoveClick={handleRemove}
        />
      </Container>
    </div>
  );
}

export default MainPage;
