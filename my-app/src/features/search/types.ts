import { Post } from "../../types";

export type SearchResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
};

export type SearchPayload = {
  text: string;
};
