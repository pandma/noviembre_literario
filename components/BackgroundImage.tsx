import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div className={styles.Box}>
        <Image
          // src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
          src={`https://res.cloudinary.com/dzzkeb6xp/image/upload/v1664129456/istockphoto-1065067004-612x612_e2bptn.jpg`}
          alt="Picture of the author"
          width={width}
          height={height}
        />
      </div>
    );
  }

  return null;
}

export default BGImage;
