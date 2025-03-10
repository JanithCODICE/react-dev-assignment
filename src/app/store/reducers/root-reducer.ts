import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import notificationSlice from "./notification.slice";

export const rootReducer = combineReducers({
    user: userSlice,
    notification: notificationSlice,
})