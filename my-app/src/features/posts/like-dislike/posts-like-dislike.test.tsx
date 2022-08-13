import { PostsLikeDislike } from "./posts-like-dislike";
import { LikeDislike } from "./ui/like-dislike/LikeDislike";
import { renderWithRedux } from "../../../test-config/render-with-redux";
import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers";
import { screen } from "@testing-library/react";

test("Count rendering", () => {
  renderWithRedux(<PostsLikeDislike id={1}></PostsLikeDislike>, {
    initialState: { likeDislike: { "1": { count: 16, state: "like" } } },
  });
  expect(screen.getByText("16")).toBeTruthy;
});
