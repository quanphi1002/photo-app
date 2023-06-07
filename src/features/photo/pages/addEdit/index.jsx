import React from "react";
import "./styles.scss";
import Banner from "components/banner";
import PhotoForm from "features/photo/component/photoForm";
import { addPhoto, editPhoto } from "features/photo/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photos = useSelector((state) => state.photoReducer);

  const { photoId } = useParams();

  const idAddMode = !photoId;

  const photoEdit = photos.find((photo) => photo.id === +photoId);

  const handleSubmit = (values) => {
    setTimeout(() => {
      if (idAddMode) {
        const action = addPhoto(values);
        dispatch(action);
      } else {
        const action = editPhoto(values);
        dispatch(action);
      }
      navigate("/");
    }, 2000);
  };
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          idAddMode={idAddMode}
          photoEdit={photoEdit}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
