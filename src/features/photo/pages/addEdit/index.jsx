import React from "react";
// import Banner from "../../../../components/banner";
// import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import PhotoForm from "../../component/photoForm";
import Banner from "../../../../components/banner";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  console.log("vo day222");
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
