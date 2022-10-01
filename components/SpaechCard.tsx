import { Row, Col, Container } from "react-bootstrap";
import { Speach } from "../interface/interface";

const SpeachCard = ({ date, title, owner }: Speach) => {
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
            style={{
              height: "10vh",
              width: "10vh",
              borderRadius: "50%",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664644409/iconmonstr-microphone-13-240_1_tweub1.png)`,
            }}
          />
        </Col>
        <Col md={{ span: 9 }}>
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
