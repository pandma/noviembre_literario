import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Row, Col, Container, Navbar } from "react-bootstrap";

function SubBar() {
  return (
    <>
      <Navbar className={styles.subNav}>
        <Navbar.Offcanvas>
          <Container fluid>
            <Row>
              <Navbar.Brand
                style={{
                  fontSize: "2em",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Link href={"main"}> Noviembre literario</Link>
              </Navbar.Brand>
            </Row>
            <hr />
            <Row
              className={styles.subNavRow}
              style={{ justifyContent: "center" }}
            >
              <Col md={{ span: 3 }}>
                <Link href={"mester"}>Mester de algarabía</Link>
              </Col>
              <Col md={{ span: 3 }}>
                <Link href={"speach"}>Charlas</Link>
              </Col>
              <Col md={{ span: 3 }}>
                <Link href={"docs"}>Documentacíon</Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default SubBar;
