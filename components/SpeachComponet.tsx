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
      {/* <Row
        style={{
          paddingTop: "3%",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          <h2 style={{ textAlign: "center" }}>Introducción</h2>
          <hr />
          <p
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontSize: "1.3em",
            }}
          >
            El Mester de Algarabía es un grupo de Profesores-Tutores del ámbito
            de las Humanidades.
            <br />
            Más que un grupo, el Mester de Algarabía es una actitud ante la
            profesión docente y ante la vida: prefieren el diálogo a la clase
            magistral; la devoción antes que la obligación y carecen de
            complejos al reconocer que existe el mismo desafío científico al
            contemplar un átomo que un verso. Como en los viejos mesteres, la
            cultura se divulga mejor en la algarabía del camino. Y de acuerdo
            con el beodo Molinero de Chaucer: «¿por qué adoptar una actitud
            seria ante un juego?»
          </p>
        </Col>
      </Row> */}
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
