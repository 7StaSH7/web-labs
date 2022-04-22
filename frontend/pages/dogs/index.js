import React, { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";
import Header from "../header";
import Dog from "./dog";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../data";
import Pusher from "pusher-js";
import { updatePostStats } from "../../utils/helpers";

const fetcher = async (url) => fetch(url).then((res) => res.json());

Pusher.logToConsole = true;
let pusher = new Pusher("64899b4087c6e5c565ac", {
  cluster: "eu",
});
let socketId;
export default function Dogs() {
  const [cards, setCards] = useState([]);
  useEffect(async () => {
    pusher.connection.bind("connected", function () {
      socketId = pusher.connection.socket_id;
    });
    let channel = pusher.subscribe("card-events");
    channel.bind("cardAction", function (data) {
      console.log(data);
      let action = data.action;
      updatePostStats[action](data.cardId);
    });
    // const res = await fetch("https://dog.ceo/api/breeds/list/all", fetcher);
    const res = await fetch("http://localhost:5000/api/cards/dogs", fetcher);
    const data = await res.json();
    if (!data) return <ClipLoader css={override} size={150} />;
    if (data.meta) return <div>Fail :(</div>;
    setCards(data.result);
  }, []);
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h4 className={styles.main_title}>Породы собак</h4>
        <div className={styles.grid_list}>
          {cards.map((card, idx) => {
            return (
              <Dog dog={card} key={idx} id={card.id} socketId={socketId} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
