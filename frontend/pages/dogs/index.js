import React from "react";

import styles from "../../styles/Home.module.css";
import Header from "../header";
import useSWR from "swr";
import Dog from "./dog";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../data";

const fetcher = async (url) => fetch(url).then((res) => res.json());

export default function Dogs() {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/list/all",
    fetcher
  );
  if (!data) return <ClipLoader css={override} size={150} />;
  if (error) return <div>Fail :(</div>;

  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h4 className={styles.main_title}>Породы собак</h4>
        <div className={styles.grid_list}>
          {Object.keys(data.message).map((dog, idx) => {
            return <Dog dog={dog} key={idx} />;
          })}
        </div>
      </main>
    </div>
  );
}
