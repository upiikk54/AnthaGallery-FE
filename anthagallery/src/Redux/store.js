import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthReducer";
import UserReducer from './slices/UserReducer';

const rootReducer = {
    user: UserReducer,
    auth: AuthReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;