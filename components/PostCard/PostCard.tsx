"use client";

import { JSX, useState } from "react";
import { LikeCounter } from "../LikeCounter/LikeCounter";
import { LikeButton } from "../LikeButton/LikeButton";
import styles from "./PostCard.module.css";

interface PostCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  likes: number;
}

export const PostCard = ({
  title,
  description,
  category,
  date,
  readingTime,
  likes,
}: PostCardProps): JSX.Element => {
  const [likesCount, setLikesCount] = useState(likes);

  return (
    <div className={styles.card}>
      <img src="/card.svg" alt="карточка" />

      <div className={styles["card-header"]}>
        <span>
          {category}
          <img className={styles.point} src="/point.svg" alt="точка" />
          {date}
        </span>

        <div className={styles.likes}>
          <LikeCounter count={likesCount} />
        </div>
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <div className={styles["card-footer"]}>
        <span>{readingTime}</span>
        <a href="#" className={styles.read}>
          Читать <img src="/arrow.svg" alt="стрелка" />
        </a>
      </div>
    </div>
  );
};