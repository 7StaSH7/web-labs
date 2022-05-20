import styles from "../styles/Home.module.css";
import { useAuth } from "../utils/auth";

export default function Footer() {
  const auth = useAuth();
  return (
    <footer className={styles.footer}>
      <section id="contact">
        <h3 className="section-title">
          {auth.locale === "ru" ? "Контакты" : "Contacts"}
        </h3>
        <a href="https://telegram.me/AnimalForumBot" target="_blank">
          <div
            className={`pi pi-telegram ${styles.telegram}`}
            style={{ fontSize: "2em" }}
          ></div>
        </a>
      </section>
    </footer>
  );
}
