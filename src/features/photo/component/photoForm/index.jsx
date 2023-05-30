import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          id="categoryId"
          name="categoryId"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

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
}

export default PhotoForm;
