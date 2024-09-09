import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";

interface VisibleUsersState {
  searchText: string;
  keyName: keyof User;
  visibleUsers: User[];
  allUsers: User[];
}

const visibleUsersInitialState: VisibleUsersState = {
  searchText: "",
  keyName: "name",
  visibleUsers: [],
  allUsers: [],
};

const visibleUsersSlice = createSlice({
  name: "visibleUsersSlice",
  initialState: visibleUsersInitialState,
  reducers: {
    setKeyName(state, action: PayloadAction<keyof User>) {
      state.keyName = action.payload;

      state.visibleUsers = state.allUsers.filter((user) =>
        String(user[state.keyName]).toLowerCase().includes(state.searchText.toLowerCase())
      );
    },

    searchFor(state, action: PayloadAction<string>) {
      state.searchText = action.payload;

      state.visibleUsers = state.allUsers.filter((user) =>
        String(user[state.keyName]).toLowerCase().includes(action.payload.toLowerCase())
      );
    },

    setAllUsers(state, action: PayloadAction<User[]>) {
      state.allUsers = action.payload;

      state.visibleUsers = state.allUsers.filter((user) =>
        String(user[state.keyName]).toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
});

export const visibleUsersActions = visibleUsersSlice.actions;

export default visibleUsersSlice.reducer;
