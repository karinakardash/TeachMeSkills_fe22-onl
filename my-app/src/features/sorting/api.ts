import { baseUrl } from "../../../src/api/config";
import { SortingResponse } from "./types";

export namespace SortingApi {
  export async function sorting(params: {
    text: string;
    limit: number;
    offset: number;
  }) {
    try {
      const data = await fetch(
        `${baseUrl}blog/posts/?limit=${params.limit}&offset=${params.offset}&ordering=${params.text}`
      );
      const { results } = await data.json();
      if (!data.ok) {
        const errorText = await data.text();
        throw new Error(errorText);
      }
      return results;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
