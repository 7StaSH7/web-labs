import React, { useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";
import Header from "../header";
import Dog from "./dog";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../data";
import Pusher from "pusher-js";
import { updatePostStats } from "../../utils/helpers";

export default function Dogs() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [socketId, setSocketId] = useState("");
  useEffect(async () => {
    let pusher = new Pusher("57a270cfa92ec1468241", {
      cluster: "eu",
    });
    pusher.connection.bind("connected", function () {
      
      if (typeof window !== "undefined") {
        setSocketId(JSON.parse(localStorage.getItem("socketId")))
        if (!socketId) {
          setSocketId(pusher.connection.socket_id);
          localStorage.setItem("socketId", JSON.stringify(socketId))
        }
      }
    });
    let channel = pusher.subscribe("card-events");
    channel.cancelSubscription();
    channel.bind("cardAction", function (data) {
      let action = data.action;
      updatePostStats[action](data.cardId);
    });
    // const res = await fetch("https://dog.ceo/api/breeds/list/all", fetcher);
    const res = await fetch("http://localhost:5000/api/cards/dogs");
    const data = await res.json();
    if (data.meta) return <div>Fail :(</div>;
    setCards(data.result);
    setLoading(false);
    
  }, []);

  return loading ? (
    <ClipLoader css={override} size={150} />
  ) : (
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
