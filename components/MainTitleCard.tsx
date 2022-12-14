import styles from "../styles/Home.module.css";

const MainTitleCard = () => {
  return (
    <div
      id={styles.mainTitle}
      style={{
        color: "black",
        textAlign: "center",
        border: " 2px solid",
        padding: "15px 8px 15px 8px",
        borderRadius: " 50px",
        borderColor: "rgb(255, 255, 255)",
        opacity: " 0.7",
        filter: "alpha(opacity=50)",
        zoom: "1",
        backgroundColor: "aliceblue",
      }}
    >
      <h1>Centenario Pier Paolo Pasolini</h1>
    </div>
  );
};

export default MainTitleCard;
