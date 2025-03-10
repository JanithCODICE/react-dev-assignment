import React from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import CustomLink from "../../shared-components/atoms/Link/CustomLink";

interface SideNavBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ isOpen, toggle }) => {
  return (
    <Offcanvas isOpen={isOpen} toggle={toggle}>
      <OffcanvasHeader toggle={toggle}>Department Dashboard</OffcanvasHeader>
      <OffcanvasBody className="d-flex flex-column flex-shrink-0"> 
        <div className="mb-auto">
          <CustomLink type="nav" to="/users">Users</CustomLink>
        </div>
        <div>
            <hr />
            <CustomLink type="nav" to="/logout">Log out</CustomLink>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default SideNavBar;
