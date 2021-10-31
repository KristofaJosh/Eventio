import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";

const authPersistConfig = {
    key: "auth",
    storage,
    blacklist: ["error", "loading"],
};

export const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
