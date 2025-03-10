import React from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import CustomLink from "../../shared-components/atoms/Link/CustomLink";

interface MainNavbarProps {
  isOpen: boolean;
  toggle: () => void;
  toggleOffCanvas: () => void;
}

const MainNavbar: React.FC<MainNavbarProps> = ({ isOpen, toggle, toggleOffCanvas }) => {
  return (
    <Navbar className="custom-navbar">
      <NavbarBrand href="/dashboard">Department Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} className="d-md-none" />
      <NavbarToggler onClick={toggleOffCanvas} className="d-none d-md-flex" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <CustomLink type="nav" to="/users">Users</CustomLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavbar;
