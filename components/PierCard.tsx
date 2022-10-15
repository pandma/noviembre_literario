import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const PierCard = () => {
  return (
    <Container fluid>
      <Row>
        <Col className={styles.HalfImage1} />
        <Col id={styles.showNon}>
          <div
            style={{
              paddingTop: "20%",
              paddingLeft: "6%",
              maxWidth: "70%",
            }}
          >
            <p>
              “Hoy la libertad sexual de la mayoría es realmente una convención
              y una obligación social. Una característica irrenunciable de la
              calidad de vida del hombre”.
            </p>
            <hr />
            <span>PIER PAOLO PASOLINI</span>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "6%",
        }}
      >
        <Col md={{ span: 5, offset: 1 }}>
          <div
            style={{
              paddingTop: "20%",
              paddingLeft: "6%",
              paddingBottom: "10%",
              maxWidth: "80%",
              alignContent: "flex-end",
              textAlign: "end",
            }}
          >
            <p >
              “La Iglesia no puede ser reaccionaria, no puede ser parte del
              poder y no puede aceptar las reglas formales y autoritarias de la
              convivencia”.
            </p>
            <hr />
            <span>PIER PAOLO PASOLINI</span>
          </div>
        </Col>
        <Col className={styles.HalfImage2} />
      </Row>
    </Container>
  );
};
export default PierCard;
