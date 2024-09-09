import { configureStore } from "@reduxjs/toolkit";
import visibleUsersReducer from "./reducers/visibleUsersReducer";

const store = configureStore({ reducer: { visibleUsers: visibleUsersReducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
