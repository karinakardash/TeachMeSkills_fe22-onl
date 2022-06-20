import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as presseBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import styles from "../marker/Marker.module.css";

type MarkerProps = {
  onMarkerClick: () => void;
  currentState: boolean;
};

export const Marker: React.FC<MarkerProps> = ({
  onMarkerClick,
  currentState,
}) => {
  const BookmarkIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      onClick={(event) => {
        event.preventDefault();
        onMarkerClick();
      }}
      role="button"
    />
  );
  const PressedBookmarkIcon = (
    <FontAwesomeIcon
      icon={presseBookmark}
      onClick={(event) => {
        event.preventDefault();
        onMarkerClick();
      }}
      role="button"
    />
  );

  return (
    <div className={styles.wrapper}>
      {currentState === true ? PressedBookmarkIcon : BookmarkIcon}
    </div>
  );
};
