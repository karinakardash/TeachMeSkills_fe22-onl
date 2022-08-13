import { baseUrl } from "../../../api/config";

export namespace MyPostsApi {
  export async function getMyPostsFetch(accessToken: string) {
    try {
      const result = await fetch(`${baseUrl}blog/posts/my_posts/`, {
        method: "GET",
        headers: { authorization: `Bearer ${accessToken}` },
      });

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
