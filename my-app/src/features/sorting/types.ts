import { Post } from "../../types";

export type SortingResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
};

export type SortingPayload = {
  text: string;
  limit: number;
  offset: number;
};
