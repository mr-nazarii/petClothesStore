import Image from "next/image";
import React from "react";
import styles from "../styles/_About.module.scss";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imgWrapper}>
        <Image
          alt="dog"
          src={"/images/dogAbout.jpg"}
          layout="fill"
          objectFit="cover"
          className={styles.img}
        />
      </div>
      <p className={styles.aboutParagraph}>
        We are a 20 years old company with the experience of delivering
        marvelous costumes to our junior clients.
      </p>
    </div>
  );
};
