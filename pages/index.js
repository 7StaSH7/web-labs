import Footer from "./footer";
import styles from "../styles/Home.module.css";
import Header from "./header";
import HomeMain from "./homeMain";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
}
