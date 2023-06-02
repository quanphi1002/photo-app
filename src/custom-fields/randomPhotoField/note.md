
## Custom Field 

- Cầu nối giữa UI control và Formik.
- UI control là một controlled component với props: 
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

```js
function InputField(props) {
  const {
    field,
    type, label, placeholder, disabled,
  } = props;
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
```

## Random Photo control

RandomPhoto
Props
  - name
  - imageUrl 
  - onImageUrlChange 
  - onRandomButtonBlur