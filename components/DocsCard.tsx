import { Row, Col, Container, Button } from "react-bootstrap";

type PDF = {
  title: string;
  pdfName: string;
};

const DocsCard = ({ title, pdfName }: PDF) => {
  const handlePdf = (pdfName: string) => {
    fetch(pdfName).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = pdfName;
        alink.click();
      });
    });
  };

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
              backgroundImage: `url(https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664645353/iconmonstr-script-5-240_bfc145.png)`,
            }}
          />
        </Col>
        <Col md={{ span: 9 }}>
          <h3>{title} </h3>
          <hr />
          <Button variant="light" onClick={() => handlePdf(pdfName)}>
            descargar
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default DocsCard;
