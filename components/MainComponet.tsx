import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import React from "react";
import MainTitleCard from "./MainTitleCard";

const MainComponet = () => {
  return (
    <>
      <Container fluid className={styles.BackImnage1}>
        <Row
          style={{
            paddingTop: "10%",
            paddingLeft: "5%",
          }}
        >
          <Col md={5}>
            <MainTitleCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainComponet;
