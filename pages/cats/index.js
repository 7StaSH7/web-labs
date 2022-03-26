﻿import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "../header";
import useSWR from "swr";
import Cat from "./cat";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../data";

const fetcher = async (url) =>
  fetch(url, {
    headers: { "x-api-key": "931a3b06-484c-4287-bf41-0ed456130f6d" },
  }).then((res) => res.json());

export default function Cats() {
  const { data, error } = useSWR(
    "https://api.thecatapi.com/v1/breeds",
    fetcher
  );
  if (!data) return <ClipLoader css={override} size={150} />;
  if (error) return <div>Fail :(</div>;
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h4 className={styles.main_title}>Породы кошек</h4>
        <div className={styles.grid_list}>
          {Object.values(data).map((cat, idx) => {
            return <Cat cat={cat} key={idx} />;
          })}
        </div>
      </main>
    </div>
  );
}
