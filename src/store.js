import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./features/Todo/service/todo.service";
import { userDetailApi } from "./features/UserDetail/service/userDetail.service";
import { userListingApi } from "./features/UserListing/service/userListing.service";

export const store = configureStore({
  reducer: {
    [userListingApi.reducerPath]: userListingApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [userDetailApi.reducerPath]: userDetailApi.reducer,
  },
});
