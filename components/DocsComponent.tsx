import { Row, Col, Container } from "react-bootstrap";
import DocsCard from "./DocsCard";
import styles from "../styles/Home.module.css";
import { PROGAM, FIRST, SECOND, THIRD, FOURTH } from "../data/download";

const DocsComponent = () => {
  return (
    <Container fluid>
      <Row
        className={styles.docsImage}
        style={{
          paddingTop: "5%",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          <div className={styles.subTitle} id={styles.mainTitle}>
            <h1>Documentación</h1>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          paddingTop: "3%",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          <h2 style={{ textAlign: "center" }}>Descargas</h2>
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <DocsCard {...PROGAM} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <DocsCard {...FIRST} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <DocsCard {...SECOND} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <DocsCard {...THIRD} />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{
            padding: "2% 0% 2% 0%",
          }}
        >
          <DocsCard {...FOURTH} />
        </Col>
      </Row>
    </Container>
  );
};
export default DocsComponent;
