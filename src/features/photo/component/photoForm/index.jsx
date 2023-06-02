import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
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
  // npm i --save react-select
  console.log(4444, React);
  console.log(555, Yup);
  const initialValues = {
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
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
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

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add To Album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
