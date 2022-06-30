import { baseUrl } from "../../../api/config";
import { Post } from "../../../types";
import { GetPostPayload } from "./types";

export namespace PostsApi {
  export async function getAllPostsFetch() {
    try {
      const data = await fetch(`${baseUrl}blog/posts/?limit=20`);
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

  export async function getSelectedPostFetch(
    payload: GetPostPayload
  ): Promise<Post> {
    try {
      const result = await fetch(`${baseUrl}blog/posts/${payload.id}`);
      if (!result.ok) {
        const errorText = await result.text();
        throw new Error(errorText);
      }
      return result.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
