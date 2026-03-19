"use client";

import { JSX, useState } from "react";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  postId: number;
  initialLikes: number;
  onChange: (likes: number) => void;
}

export const LikeButton = ({
  postId,
  initialLikes,
  onChange,
}: LikeButtonProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = async (): Promise<void> => {
    const newLiked = !isLiked;
    const newLikes = newLiked ? likes + 1 : likes - 1;

    setIsLiked(newLiked);
    setLikes(newLikes);
    onChange(newLikes);

    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ likes: newLikes }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    } catch (e) {
      console.error("Ошибка PATCH", e);
    }
  };

  return (
    <button
      className={`${styles.like} ${isLiked ? styles.active : ""}`}
      onClick={handleClick}
      aria-pressed={isLiked}
    >
      <img
        src={isLiked ? "/like-active.svg" : "/like.svg"}
        alt="like"
      />
    </button>
  );
};