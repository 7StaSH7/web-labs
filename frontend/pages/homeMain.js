import styles from "../styles/Home.module.css";
import { useAuth } from "../utils/auth";

export default function HomeMain() {
  const auth = useAuth();
  return (
    <main className={styles.main}>
      <h4 className={styles.main_title}>
        <strong>
          {auth.locale === "ru" ? "Общая информация" : "General information"}
        </strong>
      </h4>
      <h5 className={styles.main_subtitle}>
        {auth.locale === "ru"
          ? [
              "Данный сайт был сделан, чтобы сдать лабораторные работы по ",
              <span key={0} className={styles.main_span}>
                WEB
              </span>,
              " программированию 😃",
            ]
          : [
              "This site was made to pass my laboratory works for ",
              <span key={1} className={styles.main_span}>
                WEB
              </span>,
              " programming 😃",
            ]}
      </h5>
      <h6 className={styles.main_subtitle}>
        {auth.locale === "ru"
          ? "Сайт рассказывает про собачек и кошечек 🐱🐶"
          : "This site is about dogs and cats 🐱🐶"}
      </h6>
      <div className="flex mx-auto mt-8">
        <img
          className={`ml-7 ${styles.spin}`}
          src="/maila.jpg"
          width="500px"
          height="600px"
        />
      </div>
    </main>
  );
}
