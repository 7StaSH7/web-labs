import Link from "next/link";
import { navLinks } from "./data";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./modal";

export default function Header() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.site_name}>
        <h1>
          <em>Animal forum</em>
        </h1>
      </div>
      <nav>
        <ul className={styles.list}>
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li
                  className={`${styles.header_item} ${
                    router.pathname === link.path
                      ? styles.header__item_active
                      : ""
                  }`}
                >
                  <h3>{link.name}</h3>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <button className={styles.login} onClick={() => setShowModal(true)}>
        Войти
      </button>

      <Modal onClose={() => setShowModal(false)} show={showModal}>
        modal
      </Modal>
    </header>
  );
}
