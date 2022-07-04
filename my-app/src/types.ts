export enum AppPages {
  ALL_POSTS = "/all-posts",
  EMAIL_CONFIRMATION = "/email-confirmation",
  INFORMATION = "/information",
  LOGIN = "/login",
  MY_POSTS = "/my-posts",
  REGISTRATION = "/registration",
  RESET_PASSWORD = "/reset-password",
  SUCCESS_PAGE = "/success-page",
  MAIN_PAGE = "/main",
  ACTIVATE = "/activate",
  POST_PAGE = "/post-page",
  ADD_POST_PAGE = "/add-post",
}

export enum TabButtons {
  ALL = "All",
  MY_FAVORITIES = "My favorities",
  POPULAR = "Popular",
}

export type Post = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};
