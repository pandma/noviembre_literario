import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import SpeachCard from "./SpaechCard";
import { SPEACH1, SPEACH2, SPEACH3, SPEACH4 } from "../data/speachInfo";

const SpeachComponet = () => {
  return (
    <Container fluid>
      <Row
        className={styles.speachImage}
        style={{
          paddingTop: "5%",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          <div
            id={styles.mainTitle}
            style={{
              color: "black",
              textAlign: "center",
              border: " 2px solid",
              padding: "10px",
              borderRadius: " 50px",
              borderColor: "rgb(255, 255, 255)",
              opacity: " 0.8",
              zoom: "1",
              backgroundColor: "aliceblue",
            }}
          >
            <h1>Charlas</h1>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "3%",
        }}>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 style={{ textAlign: "center" }}>Lugar</h2>
        </Col>
        <br />
        <Col md={{ span: 6, offset: 3 }}>
          <h4 style={{ textAlign: "center" }}>
            UNED Guadalajara-Sala de Medios
          </h4>
        </Col>

      </Row>

      <Row
        style={{
          paddingTop: "3%",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          <h2 style={{ textAlign: "center" }}>Fechas</h2>
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <SpeachCard {...SPEACH1} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <SpeachCard {...SPEACH2} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <SpeachCard {...SPEACH3} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <SpeachCard {...SPEACH4} />
        </Col>
      </Row>
    </Container>
  );
};

export default SpeachComponet;
