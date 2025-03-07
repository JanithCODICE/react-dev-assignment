import React from "react";
import { Button, ButtonProps } from "reactstrap";

interface CustomBtnProps extends ButtonProps {
  children?: React.ReactNode;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ children, ...props }) => {
  return <Button {...props}> {children} </Button>;
};

export default CustomBtn;
