export type allPostsResultsResponse = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export namespace PostsApi {
  export async function getAllPostsFetch() {
    try {
      const data = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      );
      /*{
        method: "GET",
        //body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      }
      );*/
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

  export async function getSelectedPostFetch() {
    try {
      const data = await fetch(`https://studapi.teachmeskills.by/blog/posts/}`);
      /*{
        method: "GET",
        //body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      }
      );*/
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
