import PropTypes from "prop-types";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, label, placeholder, disabled, options } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectOptionChange = (selectedOption) => {
    console.log(selectedOption);
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
    console.log(field, changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectOptionChange}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
      />
    </FormGroup>
  );
}

export default SelectField;
