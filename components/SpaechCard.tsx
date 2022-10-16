import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import { Speach } from "../interface/interface";
import styles from '../styles/Home.module.css';

const SpeachCard = ({ date, title, owner }: Speach) => {
  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          style={{
            margin: "2% 0% 2% 0%",
          }}
        >
          <div
            id={styles.phoneCenter}
            style={{
              height: "10vh",
              width: "10vh",
              borderRadius: "50%",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664644409/iconmonstr-microphone-13-240_1_tweub1.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

        </Col>
        <Col md={{ span: 9, offset: 0 }}
          xs={{ span: 11, offset: 1 }}
        >
          <h3>{date} </h3>
          <hr />
          <p>{title} </p>
          <br />
          <p>{owner} </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SpeachCard;
