import React from "react";
import { Button, ButtonProps } from "reactstrap";

interface CustomBtnProps extends ButtonProps {
  children?: React.ReactNode;
  color?: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ children, color, ...props }) => {
  return <Button color={color} {...props}> {children} </Button>;
};

export default CustomBtn;
