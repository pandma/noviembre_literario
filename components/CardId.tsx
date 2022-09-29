import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

type props = {
  name: string;
  img: string;
  text: string;
};

const CardId = ({ name, img, text }: props) => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6 }}>
          <div
            style={{
              height: "20vh",
              width: "20vh",
              borderRadius: "50%",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664129456/istockphoto-1065067004-612x612_e2bptn.jpg)",
            }}
          />
          {img}
        </Col>
        <Col md={{ span: 6 }}>
          <h3>{name} mila</h3>
          <p>{text} profe </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CardId;
