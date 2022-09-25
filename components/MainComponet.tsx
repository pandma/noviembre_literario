import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

const MainComponet = () => {
  const path =
    "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664129456/istockphoto-1065067004-612x612_e2bptn.jpg";
  const [imageData, setImageData] = useState(path);

  const carousell = [
    "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664131026/Marginalia_en_Roman_de_la_Rose_q9a4hp.jpg",
    "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664129456/istockphoto-1065067004-612x612_e2bptn.jpg",
  ];

  setTimeout(function () {
    for (let i = 0; i < carousell.length; i++) {
      setImageData(carousell[i]);
    }
  }, 3000);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "black",
      }}
    >
      <Row>
        <Col md={12}>
          <Image
            src={imageData}
            alt="Picture of the author"
            width={100}
            height={40}
            layout="responsive"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponet;
