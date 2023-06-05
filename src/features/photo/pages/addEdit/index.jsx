import React from "react";
import "./styles.scss";
import Banner from "components/banner";
import PhotoForm from "features/photo/component/photoForm";
import { addPhoto } from "features/photo/photoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setTimeout(() => {
      const action = addPhoto(values);
      dispatch(action);
      navigate("/");
    }, 2000);
  };
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
