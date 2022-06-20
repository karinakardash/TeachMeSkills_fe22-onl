import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { CardList } from "../../../ui/card/cardsList/CardList";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarker } from "../marker";
import { allPostsResultsResponse } from "./api";

type AllPostsListProps = {
  onPreviewClick?: (id: string | number) => void;
  allPosts: allPostsResultsResponse[];
};
export const AllPostsList: React.FC<AllPostsListProps> = ({
  onPreviewClick,
  allPosts,
}) => {
  return (
    <CardList
      data={allPosts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Marker={PostsMarker}
    ></CardList>
  );
};
