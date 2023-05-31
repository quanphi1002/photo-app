import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import Images from "../../../../constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/inputField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import SelectField from "custom-fields/selectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const initialValues = {
    title: "",
  };
  const validationSchema = {};

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => {
        const { values, touched, errors, isSubmitting } = formikProps;
        console.log({ values, touched, errors, isSubmitting });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div style={{ marginBottom: 10 }}>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={Images.BLUE_BG}
                  alt="colorful background"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add To Album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
