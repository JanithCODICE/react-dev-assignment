import React from "react";
import { Col, Row } from "reactstrap";
import CustomCard from "../../shared-components/atoms/Card/Card";
import CustomBtn from "../../shared-components/atoms/Button/CustomBtn";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/users");
  };
  return (
    <>
      <Row>
        <Col md={12}>
          <h3>Overview</h3>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div className="h-100">
            <CustomCard
              cardTitle="Current Users"
              cardSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate risus tellus, vel fringilla libero vestibulum non. Vivamus semper vulputate augue, vulputate mattis quam vulputate eu. Vestibulum bibendum 
            leo eu eleifend sagittis."
            >
              <div className=" d-flex justify-content-start gap-2">
                <CustomBtn color="primary" outline onClick={handleBtnClick}>
                  User List
                </CustomBtn>
                <CustomBtn color="primary" onClick={handleBtnClick}>
                  Create User
                </CustomBtn>
              </div>
            </CustomCard>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column gap-2">
            <h5>Quick Links</h5>
            <CustomCard
              cardTitle="My Permits"
              cardSubtitle="Lorem ipsum dolor sit amet"
              bodyClassName="d-flex justify-content-between"
            >
              <CustomBtn color="primary" outline>
                View Permits
              </CustomBtn>
            </CustomCard>
            <CustomCard
              cardTitle="Apply for a Permit"
              cardSubtitle="Lorem ipsum dolor sit amet"
              bodyClassName="d-flex justify-content-between"
            >
              <CustomBtn color="primary" outline>
                Apply Permits
              </CustomBtn>
            </CustomCard>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
