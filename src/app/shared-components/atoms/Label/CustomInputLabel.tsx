import React from "react";
import { Label, LabelProps } from "reactstrap";

interface CustomInputLabelProps extends LabelProps {
  required?: boolean;
  labelText: string;
}

const CustomInputLabel: React.FC<CustomInputLabelProps> = ({
  required = false,
  labelText,
  ...props
}) => {
  return (
    <Label {...props} className="custom-label">
      {labelText}
      {required ? <span style={{ color: "red" }}>* </span> : null}
    </Label>
  );
};

export default CustomInputLabel;
