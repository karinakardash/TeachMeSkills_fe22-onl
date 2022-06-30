import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { CardList } from "../../../ui/card/cardsList/CardList";
import { actions } from "../../search/searchSlice";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarker } from "../marker";
import data from "./data.json";

type PostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
};
export const PostsCardList: React.FC<PostsCardListProps> = ({
  onPreviewClick,
}) => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 100);
  }, []);
  const dispatch = useAppDispatch();
  return (
    <CardList
      data={posts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Marker={PostsMarker}
    ></CardList>
  );
};
