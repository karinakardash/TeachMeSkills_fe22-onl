import { Post } from "../../../types";
import { CardList } from "../../../ui/card/cardsList/CardList";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarker } from "../marker";

type MyPostsListProps = {
  onPreviewClick?: (id: string | number) => void;
  myPosts: Post[];
  onClick?: (id: string | number) => void;
};
export const MyPostsList: React.FC<MyPostsListProps> = ({
  onPreviewClick,
  myPosts,
  onClick,
}) => {
  return (
    <CardList
      data={myPosts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Marker={PostsMarker}
      onClick={onClick}
    ></CardList>
  );
};
