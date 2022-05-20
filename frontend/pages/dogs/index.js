import React, { useState, useEffect, useLayoutEffect } from "react";

import styles from "../../styles/Home.module.css";
import Header from "../header";
import Dog from "./dog";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../data";
import Pusher from "pusher-js";
import { updatePostStats } from "../../utils/helpers";
import { useAuth } from "../../utils/auth";
import { getLikedCards } from "../../api/getLikedCards";
import { getDogs } from "../../api/getDogs";

export default function Dogs() {
  const auth = useAuth();
  const [cards, setCards] = useState([]);
  const [likedCards, setLikedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [socketId, setSocketId] = useState("");

  useEffect(() => {
    let pusher = new Pusher("57a270cfa92ec1468241", {
      cluster: "eu",
    });
    pusher.connection.bind("connected", function () {
      if (typeof window !== "undefined") {
        if (!JSON.parse(localStorage.getItem("socketId"))) {
          setSocketId(pusher.connection.socket_id);
          localStorage.setItem("socketId", JSON.stringify(socketId));
        }
      }
    });

    let channel = pusher.subscribe("card-events");
    channel.bind(
      "cardAction",
      function (data) {
        let action = data.action;
        if (data.userId !== auth.userId) updatePostStats[action](data.cardId);
      },
      channel.unbind()
    );

    // const res = await fetch("https://dog.ceo/api/breeds/list/all", fetcher);
    const data = getDogs().then((data) => {
      setCards(data.result);
    });
    if (data.meta) return <div>Fail :(</div>;
    const username = JSON.parse(localStorage.getItem("username"))
    getLikedCards(auth.username || username).then(data => setLikedCards(data.result))

    setLoading(false);
  }, []);

  return loading ? (
    <ClipLoader css={override} size={150} />
  ) : (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h4 className={styles.main_title}>
          {auth.locale === "ru" ? "Породы собак" : "Dog breeds"}
        </h4>
        <div className={styles.grid_list}>
          {cards.map((card, idx) => {
            const isLiked = likedCards.find(
              (likedCard) => likedCard.card.id === card.id
            )
              ? true
              : false;
            
            return (
              <Dog
                dog={card}
                key={idx}
                id={card.id}
                socketId={socketId}
                isLiked={isLiked}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
