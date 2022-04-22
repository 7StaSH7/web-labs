import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { ToggleButton } from "primereact/togglebutton";
import { updatePostStats } from "../../utils/helpers";

export default function Dog({ dog, id, socketId }) {
  const [liked, setLiked] = useState(false);
  console.log(socketId);
  const like = async (value) => {
    if (value) {
      await fetch(`http://localhost:5000/api/cards/${id}/act`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "like",
          socketId: socketId,
        }),
      });
      updatePostStats["like"](id);
    } else {
      await fetch(`http://localhost:5000/api/cards/${id}/act`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "dislike",
          socketId: socketId,
        }),
      });
      updatePostStats["dislike"](id);
    }
    setLiked(value);
  };
  // fetch(`http://localhost:5000/api/cards/create`, {
  //   method: "POST",
  //   // mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     dogId: dog,
  //     imgSrc: data.message,
  //   }),
  // });
  return (
    <div className={styles.card}>
      <img className={styles.breed} src={dog.imgSrc}></img>
      <p className={styles.breed_text}>
        {dog.dogId[0].toUpperCase() + dog.dogId.substring(1)}
      </p>
      <div className="flex justify-content-between">
        <ToggleButton
          onLabel=""
          className="border-none border-circle"
          onIcon="pi pi-heart pi-heart-fill"
          offIcon="pi pi-heart"
          checked={liked}
          onChange={(e) => like(e.value)}
        />
        <p id={"likesCount-" + dog.id} className="mt-2">
          {dog.likesCount}
        </p>
      </div>
    </div>
  );
}
