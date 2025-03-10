import React from "react";
import { Link } from "react-router-dom";

interface CustomLogoBtnProps {
  src: string;
  width?: string;
  alt: string;
  link: string;
}
const CustomLogoBtn: React.FC<CustomLogoBtnProps> = ({ src, alt, width, link }) => {
  return (
    <Link to={link}>
      <img src={src} alt={alt} width={width ?? 'auto'}/>
    </Link>
  );
};

export default CustomLogoBtn;
