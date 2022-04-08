import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const fetcher = async (url) =>
  fetch(url, {
    headers: { "x-api-key": "931a3b06-484c-4287-bf41-0ed456130f6d" },
  }).then((res) => res.json());

export default function Cat({ cat }) {
  const { data, error } = useSWR(
    `https://api.thecatapi.com/v1/images/search?breed_id=${cat.id}`,
    fetcher
  );
  if (!data) return <Skeleton containerClassName={styles.card} />;
  if (error) return <div>Fail :(</div>;
  return (
    <div className={styles.card}>
      <img className={styles.breed} src={data[0].url}></img>
      <p className={styles.breed_text}>{cat.name}</p>
    </div>
  );
}
