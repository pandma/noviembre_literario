import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import styles from '../styles/Home.module.css';

type props = {
  name: string;
  img: string;
  text: string;
};

const CardId = ({ name, img, text }: props) => {
  return (
    <Container>
      <Row>
        <Col
          md={{ span: 3 }}
          style={{
            margin: "2% 0% 2% 0%",
          }}
        >
          <div
            id={styles.phoneCenterCard}
            style={{
              height: "17vh",
              width: "17vh",
              borderRadius: "50%",
              overflow: 'hidden'
            }}
          >
            <Image
              src={img}
              objectFit="cover"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
        </Col>
        <Col lg={{ span: 9, offset: 0 }} sm={{ span: 10, offset: 1 }} >
          <h3>{name} </h3>
          <hr />
          <p>{text} </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CardId;
