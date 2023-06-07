import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import Images from "../../../../constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/inputField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import SelectField from "custom-fields/selectField";
import RandomPhotoField from "custom-fields/randomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { idAddMode, photoEdit, onSubmit } = props;
  // npm i --save react-select
  const initialValues = photoEdit
    ? photoEdit
    : {
        title: "",
        categoryId: null,
        photo: "",
      };
  const validationSchema = Yup.object({
    title: Yup.string().required("this field is required"),
    categoryId: Yup.number().required("this field is required"),
    photo: Yup.string().required("this field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
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

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={idAddMode ? "primary" : "success"}>
                {isSubmitting ? <Spinner size="sm" /> : ""}
                {idAddMode ? "Add To Album" : "update Photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
