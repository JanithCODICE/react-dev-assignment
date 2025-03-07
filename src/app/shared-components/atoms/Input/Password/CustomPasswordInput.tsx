import React, { useState } from "react";
import { Button, FormFeedback, FormGroup, Input, InputGroup } from "reactstrap";
import CustomInputLabel from "../../Label/CustomInputLabel";

interface CustomPasswordInputProps {
  id: string;
  valid?: boolean;
  invalid?: boolean;
  placeHolder?: string;
  label?: string;
  onChange: (data: any) => void;
  defaultValue?: string;
  onFocus?: () => void;
  required?: boolean;
  feedback?: string;
}

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  label,
  required,
  id,
  valid,
  invalid,
  placeHolder,
  onChange,
  defaultValue,
  onFocus,
  feedback,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormGroup>
      {label && (
        <CustomInputLabel labelText={label} required={required} id={id} />
      )}
      <InputGroup>
        <Input
          aria-label={id}
          id={id}
          type={showPassword ? "text" : "password"}
          valid={valid}
          invalid={invalid}
          placeholder={placeHolder}
          onChange={onChange}
          defaultValue={defaultValue}
          onFocus={onFocus}
        />
        <Button
          onClick={togglePasswordVisibility}
          color="link"
          style={{
            color: "black",
            textDecoration: "none",
            backgroundColor: "white",
            borderColor: "#dee2e6",
            borderLeft: "0",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </Button>
        <FormFeedback>{feedback}</FormFeedback>
      </InputGroup>
    </FormGroup>
  );
};

export default CustomPasswordInput;
