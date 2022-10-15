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
              <Col sm={{ span: 12, offset: 0 }} md={{ span: 3, offset: 0 }} id={styles.inscribe} style={{
                paddingLeft: "3%"
              }}>
                <Navbar.Brand style={{
                  fontSize: "2em",
                  color: "white",
                }}>
                  <Link href="https://extension.uned.es/actividad/28206">
                    <Button variant="warning">Inscríbirme</Button>
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col sm={{ span: 12, offset: 0 }} md={{ span: 4, offset: 1 }} className={styles.TopPhone} style={{
                paddingLeft: "4%"
              }}>
                <Navbar.Brand id={styles.navBrand}>
                  <Link href={"main"}>
                    <h1 id={styles.TITLE}>Noviembre literario</h1>
                  </Link>
                </Navbar.Brand>
              </Col>
            </Row>
            <hr />
            <Row
              className={styles.subNavRow}
              style={{ justifyContent: "center" }}
            >
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }}>
                <Link href={"mester"}>Mester de algarabía</Link>
              </Col>
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }}>
                <Link href={"speach"}>Charlas</Link>
              </Col>
              <Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 2 }}>
                <Link href={"docs"}>Documentación</Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default SubBar;
