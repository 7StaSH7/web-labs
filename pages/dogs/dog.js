import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = async (url) => fetch(url).then((res) => res.json());

export default function Dog({ dog }) {
  const { data, error } = useSWR(
    `https://dog.ceo/api/breed/${dog}/images/random`,
    fetcher
  );
  if (!data) return <Skeleton className={styles.card} />;
  if (error) return <div>Fail :(</div>;

  return (
    <div className={styles.card}>
      <img className={styles.breed} src={data.message}></img>
      <p className={styles.breed_text}>
        {dog[0].toUpperCase() + dog.substring(1)}
      </p>
    </div>
  );
}
