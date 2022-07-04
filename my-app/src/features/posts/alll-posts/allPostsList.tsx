import { Post } from "../../../types";
import { CardList } from "../../../ui/card/cardsList/CardList";
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
  return (
    <CardList
      data={allPosts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Marker={PostsMarker}
      onClick={onClick}
    ></CardList>
  );
};
