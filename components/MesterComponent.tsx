import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const MesterComponet = () => {
  return (
    <Container fluid>
      <Row className={styles.bookImage}>
        <Col md={6}>
          <div
            style={{
              color: "black",
              textAlign: "center",
              border: " 2px solid",
              padding: "10px",
              borderRadius: " 50px",
              borderColor: "rgb(255, 255, 255)",
              opacity: " 0.7",
              filter: "alpha(opacity=50)",
              zoom: "1",
              backgroundColor: "aliceblue",
            }}
          >
            <h1>El Mester de Algerabia</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MesterComponet;
