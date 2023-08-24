import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";
import userSliceReducer from "./states/User/userSlice";

export interface AppStore {
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer
  }
})