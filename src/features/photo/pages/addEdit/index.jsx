import React, { useEffect } from "react";
import "./styles.scss";
import Banner from "components/banner";
import PhotoForm from "features/photo/component/photoForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPhoto, getListPhoto, postPhoto } from "features/photo/photoThunk";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photos = useSelector((state) => state.photoReducer.photos);

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
  }, [dispatch, photos.length]);

  const { photoId } = useParams();

  const isAddMode = !photoId;

  const photoEdit = photos.find((photo) => photo.id === photoId);

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photoEdit;

  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
    navigate("/");
  };
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          idAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
