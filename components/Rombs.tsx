import styles from "../styles/Home.module.css";
import Link from "next/link";

const Rombs = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          textAlign: "center"

        }}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              paddingTop: "5%",
            }}
          >
            NOVIEMBRE LITERARIO
          </h1>
        </div>
        <div>
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
        </div>
        <br />
        <br />
        <div >
          <Link href="/main">
            <div className={styles.heart}>
              <img
                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664122746/image_dvnt7p.png"
                alt="Picture of the author"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Rombs;
