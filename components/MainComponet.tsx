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
            paddingTop: "7%",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <MainTitleCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainComponet;
