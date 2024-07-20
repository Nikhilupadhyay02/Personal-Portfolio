import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nikhil Upadhyay</h1>
        <p className={styles.description}>
        I'm a final-year student with a strong foundation in HTML, CSS, JavaScript, and React. Specializing in front-end development, I’m passionate about creating intuitive and visually appealing user interfaces. I’ve worked on various projects that demonstrate my skills in building responsive and engaging web applications. I’m eager to leverage my knowledge and continue growing in the professional world.
        </p>
        <a href="mailto:Nikhilupadhyay1711@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("skills/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};