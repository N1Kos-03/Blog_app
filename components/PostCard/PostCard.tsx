import { JSX } from "react";
import { LikeCounter } from "../LikeCounter/LikeCounter";
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
  return (
    <div className={styles.card}>
      <img src="/card.svg" alt="карточка" />
      <div className={styles["card-header"]}>
        <span>{category}<img className={styles.point} src="/point.svg" alt="точка"/>{date}</span>
        <LikeCounter count={likes} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className={styles["card-footer"]}>
        <span>{readingTime}</span>
        <a href="#">Читать <img src="/arrow.svg" alt="стрелка" /></a>
      </div>

    </div>
  );
};