import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import markedPostReducer from "./features/posts/marker/markerSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import authReducer from "./features/auth/authSlice";
import allPostsReducer from "./features/posts/alll-posts/allPostsSlice";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search";
import postReducer from "./pages/selected-post-page/selectedPostSlice";
import myPostsReducer from "./features/posts/my-posts/myPostsSlice";
import sortingReducer from "./features/sorting/sortingSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    likeDislike: likeDislikeReducer,
    markedPost: markedPostReducer,
    auth: authReducer,
    allPosts: allPostsReducer,
    user: userReducer,
    search: searchReducer,
    post: postReducer,
    myPosts: myPostsReducer,
    sorting: sortingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
