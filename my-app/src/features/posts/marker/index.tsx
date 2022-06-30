import React from "react";
import { setMarker } from "./markerSlice";
import { Marker } from "./ui/marker/Marker";
import { useAppSelector, useAppDispatch } from "../../../hooks";

type PostsMarkerProps = {
  id: number | string;
};

export const PostsMarker: React.FC<PostsMarkerProps> = ({ id }) => {
  const { state } = useAppSelector(
    (state) => state.markedPost[id] ?? { state: "false" }
  );
  const dispatch = useAppDispatch();
  const onMarkerClick = () => {
    if (state !== true) {
      dispatch(setMarker({ id, state: true }));
    } else {
      dispatch(setMarker({ id, state: false }));
    }
  };

  return (
    <Marker onMarkerClick={() => onMarkerClick()} currentState={state}></Marker>
  );
};
