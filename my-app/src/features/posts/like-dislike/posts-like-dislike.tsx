import React from "react";
import likeDislikeSlice, { setState } from "./likeDislikeSlice";
import { LikeDislike } from "./ui/like-dislike/LikeDislike";
import { useAppSelector, useAppDispatch } from "../../../hooks";

type PostsLikeDislikeProps = {
  id: number | string;
};
export const PostsLikeDislike: React.FC<PostsLikeDislikeProps> = ({ id }) => {
  const { count, state } = useAppSelector(
    (state) => state.likeDislike[id] ?? { count: 0, state: null }
  );
  const dispatch = useAppDispatch();
  const onLikeClick = () => {
    if (state !== "like") {
      dispatch(setState({ id, state: "like" }));
    }
  };
  const onDislikeClick = () => {
    if (state !== "dislike") {
      dispatch(setState({ id, state: "dislike" }));
    }
  };
  return (
    <LikeDislike
      onLikeClick={() => onLikeClick()}
      onDislikeClick={() => onDislikeClick()}
      currentState={state}
      count={count}
    ></LikeDislike>
  );
};
