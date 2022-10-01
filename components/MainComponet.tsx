import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import React from "react";
import MainTitleCard from "./MainTitleCard";

const MainComponet = () => {
  return (
    <>
      <Container fluid>
        <Row
          className={styles.BackImnage1}
          style={{
            paddingTop: "7%",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <MainTitleCard />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "3%",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <h2 style={{ textAlign: "center" }}>NOVIEMBRE LITERARIO</h2>
            <hr />
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                fontSize: "1.3em",
              }}
            >
              Ciclo de divulgación humanística a la caída del otoño: de la
              Universidad a la mesa. Especialmente concebido para los amantes
              furtivos de las Humanidades en sus múltiples apariencias:
              Filología, Historia, Arte, Filosofía, Psicología, Cine o Cultura
              en general. Bienvenidos también los que se arroban contemplando
              números, protones o bacterias. Es un punto de encuentro ideado
              como un aula alternativa donde ponentes y público pueden con total
              libertad ejercer la confrontación abierta porque como decía Miki
              Naranja: «La única verdad que no caduca es la que ha muerto».
            </p>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "3%",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <h2 style={{ textAlign: "center" }}>PIER PAOLO PASOLINI</h2>
            <hr />
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                fontSize: "1.3em",
              }}
            >
              En este Noviembre Literario hemos querido rendir un homenaje a la
              figura de Pier Paolo Pasolini de cuyo nacimiento se cumplen ahora
              cien años. A él se le deben las mejores adaptaciones al cine de la
              tradición narrativa que nos ha legado la Edad Media. En su
              Trilogía de la Vida Pasolini lleva a la pantalla Il Decameron de
              Giovanni Boccaccio (1971), I racconti di Caterbury de Geoffrey
              Chaucer (1972) e Il fiore delle Mille e una notte (1974). Durante
              los primeros tres jueves el Mester de Algarabía indagará en las
              relaciones que guardan el sexo, el amor y el humor en las fuentes
              originales. El cuarto jueves se reserva para ver cómo ese Eros
              peregrino y socarrón se pasea por la propia obra fílmica de
              Pasolini.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainComponet;
