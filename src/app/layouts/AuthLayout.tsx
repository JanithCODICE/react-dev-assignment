import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import { Container } from "reactstrap";

const AuthLayout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div className="auth-layout">
      <MainNavbar
        isOpen={isNavOpen}
        toggle={toggleNav}
        toggleOffCanvas={toggleOffCanvas}
      />
      {!isNavOpen && (
        <SideNavBar isOpen={isOffCanvasOpen} toggle={toggleOffCanvas} />
      )}
      <Container fluid className="my-2">
        <Outlet />
      </Container>
    </div>
  );
};

export default AuthLayout;
