import Image from "next/image";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Speach } from "../interface/interface";
import styles from '../styles/Home.module.css';

const SpeachCard = ({ date, title, owner, ppt }: Speach) => {
  const handlePdf = (pdfName: string) => {
    fetch(pdfName).then((response) => {
      response.blob()
        .then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = pdfName;
          alink.click();
          window.open(pdfName, '_blank');
        });
    });
  };
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
          <div id={styles.pptButon} >
            <p style={{ paddingTop: "1%" }}> {owner} </p>
            {ppt && <Button variant="warning" onClick={() => handlePdf(ppt)}> ver presentación </Button>}
          </div>
        </Col>
      </Row >
    </Container >
  );
};

export default SpeachCard;
