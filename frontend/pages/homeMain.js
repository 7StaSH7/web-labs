﻿import styles from "../styles/Home.module.css";

export default function HomeMain() {
  return (
    <main className={styles.main}>
      <h4 className={styles.main_title}>
        <strong>Общая информация</strong>
      </h4>
      <h5 className={styles.main_subtitle}>
        Данный сайт был сделан, чтобы сдать лабораторные работы по{" "}
        <span className={styles.main_span}>WEB</span> программированию 😃
      </h5>
      <h6 className={styles.main_subtitle}>
        Сайт рассказывает про собачек и кошечек 🐱🐶
      </h6>
      <div className={styles.main_animation}></div>
    </main>
  );
}