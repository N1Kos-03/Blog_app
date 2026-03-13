import { JSX } from "react";

interface LikeCounterProps {
  count: number;
}

export const LikeCounter = ({ count }: LikeCounterProps): JSX.Element => {
  return (
    <div>
      {count} <img src="/like.svg" alt="лайк" /> 
    </div>
  );
};