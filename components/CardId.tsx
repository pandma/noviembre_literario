import { Row, Col, Container } from "react-bootstrap";

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
            style={{
              height: "20vh",
              width: "20vh",
              borderRadius: "50%",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${img})`,
            }}
          />
        </Col>
        <Col md={{ span: 9 }}>
          <h3>{name} </h3>
          <hr />
          <p>{text} </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CardId;
