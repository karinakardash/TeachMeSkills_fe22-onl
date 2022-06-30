import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { Post } from "../../../types";
import { CardList } from "../../../ui/card/cardsList/CardList";
import { actions } from "../../search/searchSlice";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarker } from "../marker";

type AllPostsListProps = {
  onPreviewClick?: (id: string | number) => void;
  allPosts: Post[];
  onClick?: (id: string | number) => void;
};
export const AllPostsList: React.FC<AllPostsListProps> = ({
  onPreviewClick,
  allPosts,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  return (
    <CardList
      data={allPosts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Marker={PostsMarker}
      onClick={onClick}
      // onSelectedPost={() => dispatch(actions.reset)}
    ></CardList>
  );
};
