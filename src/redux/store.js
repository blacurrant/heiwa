import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import loginReducer from './slice/login';
import loginToggleReducer from './slice/loginState'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        login: loginReducer,
        loginState: loginToggleReducer,
    },
});
                