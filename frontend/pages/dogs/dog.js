import styles from "../../styles/Home.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useRef, useEffect } from "react";
import { ToggleButton } from "primereact/togglebutton";
import { updatePostStats } from "../../utils/helpers";
import { useAuth } from "../../utils/auth";
import { Toast } from "primereact/toast";
import { likeAction } from "../../api/like";

export default function Dog({ dog, id, socketId, isLiked }) {
  const auth = useAuth();
  const [liked, setLiked] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);
  const like = async (value) => {
    if (!auth.isLogined) {
      toast.current.show({
        severity: "error",
        summary:
          auth.locale === "ru"
            ? "Авторизируйтесь, чтобы ставить лайки"
            : "Sign in to put likes",
        life: 3000,
      });
      return;
    }
    if (value) {
      const done = await likeAction(id, "like", socketId, auth.username);
      //if (done.affected) updatePostStats["like"](id);
    } else {
      const done = await likeAction(id, "dislike", socketId, auth.username);
      //if (done.affected) updatePostStats["dislike"](id);
    }
    isLiked = value;
    setLiked(value);
  };

  return (
    <>
      <Toast ref={toast} position="bottom-right" baseZIndex={20} />
      <div className={styles.card}>
        <img className={styles.breed} src={dog ? dog.imgSrc : ""}></img>
        <p className={styles.breed_text}>
          {dog ? dog.dogId[0].toUpperCase() + dog.dogId.substring(1) : ""}
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
          <p
            id={dog ? "likesCount-" + dog.id : "likesCount-0"}
            className="mt-2"
            style={{ fontFamily: "font-family: 'Source Code Pro', monospace" }}
          >
            {dog ? dog.likesCount : "0"}
          </p>
        </div>
      </div>
    </>
  );
}
