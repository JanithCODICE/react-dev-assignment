import React from "react";
import { FormFeedback, FormGroup, Input } from "reactstrap";
import CustomInputLabel from "../../Label/CustomInputLabel";

interface CustomEmailInputProps {
  id: string;
  valid?: boolean;
  invalid?: boolean;
  placeHolder?: string;
  label?: string;
  onChange: (data: any) => void;
  defaultValue?: string;
  required?: boolean;
  onFocus?: () => void;
  disabled?: boolean;
  value?: string;
  feedback?: string;
}

const CustomEmailInput: React.FC<CustomEmailInputProps> = ({
  label,
  required,
  id,
  placeHolder,
  onChange,
  onFocus,
  defaultValue,
  value,
  disabled,
  valid,
  invalid,
  feedback,
}) => {
  return (
    <FormGroup>
      {label && <CustomInputLabel labelText={label} required={required} id={id}/>}
      <Input
        id={id}
        type="text"
        valid={valid}
        invalid={invalid}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        onFocus={onFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
      />
      {invalid && <FormFeedback>{feedback}</FormFeedback>}
    </FormGroup>
  );
};

export default CustomEmailInput;
