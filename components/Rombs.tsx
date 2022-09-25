import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Rombs = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: "5%",
          }}
        >
          NOVIEMBRE LITERARIO
        </h1>
        <br />
        <h2
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          SEXO, AMOR Y HUMOR EN LA LITERATURA MEDIEVAL:
          <br />
          «Mejor casarse que abrasarse»
        </h2>
        <Row
          style={{
            paddingTop: "5%",
          }}
        >
          <Col className={styles.imageCenter}>
            <Link href="/main">
              <div className={styles.heart}>
                <Image
                  src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664122746/image_dvnt7p.png"
                  alt="Picture of the author"
                  width={600}
                  height={500}
                />
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rombs;

{
  /* <Col md={{ span: 3, offset: 4 }}>
<div className={styles.flex1}>
  <Image
    src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664042531/rhombus_kournd.png"
    alt="Picture of the author"
    width={500}
    height={600}
  />
</div>
</Col>
<Col md={{ span: 3, offset: 0 }}>
<div className={styles.flex2}>
  <Image
    src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664042531/rhombus_kournd.png"
    alt="Picture of the author"
    width={500}
    height={600}
  />
</div>
</Col> */
}
