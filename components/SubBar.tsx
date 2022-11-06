import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Row, Col, Container, Navbar, Button } from "react-bootstrap";

function SubBar() {
  return (
    <>
      <Navbar className={styles.subNav}>
        <Navbar.Offcanvas>
          <Container fluid>
            <Row style={{ maxHeight: "5vh" }}>
              <Col sm={{ span: 12, offset: 0 }} md={{ span: 4, offset: 0 }} id={styles.inscribe} style={{
                paddingLeft: "3%"
              }}>
                <Navbar.Brand style={{
                  fontSize: "2em",
                  color: "white",
                }}>
                  <Link href="https://extension.uned.es/actividad/28206">
                    <Button variant="warning">Inscribirme</Button>
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col sm={{ span: 12, offset: 0 }} md={{ span: 4, offset: 0 }} className={styles.TopPhone} style={{
                textAlign: "center"
              }}>
                <Navbar.Brand id={styles.navBrand}>
                  <Link href={"main"}>
                    <h1 id={styles.TITLE}>Noviembre literario</h1>
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col md={{ span: 4, offset: 0 }} />
            </Row>
            <hr />
            <Row
              className={styles.subNavRow}
              style={{ justifyContent: "center" }}
            >
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 0 }} style={{ textAlign: "center" }}>
                <Link href={"mester"}>
                  <span id={styles.blueLink}>
                    Mester de algarabía
                  </span>
                </Link>
              </Col>
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 0 }} style={{ textAlign: "center" }}>
                <Link href={"speach"}>
                  <span id={styles.blueLink}>
                    Charlas
                  </span>
                </Link>
              </Col>
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 0 }} style={{ textAlign: "center" }}>
                <Link href={"docs"}>
                  <span id={styles.blueLink}>
                    Documentación
                  </span>
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default SubBar;
