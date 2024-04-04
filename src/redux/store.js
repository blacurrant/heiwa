import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./slice/todo";
import loginReducer from './slice/login';
import loginToggleReducer from './slice/loginState';
import persistConfig from './persistConfig';
import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import dataReducer from './slice/spotifyData';
import playlistReducer from './slice/Playlist/playlistArray';
import userReducer from './slice/users/userArray';
// export const store = configureStore({
//     reducer: {
//         todo: todoReducer,
//         login: loginReducer,
//         loginState: loginToggleReducer,
//     },
// });


const persistedReducer = persistReducer(persistConfig, combineReducers({
    // todo: todoReducer,
    login: loginReducer,
    loginState: loginToggleReducer,
    data: dataReducer,
    playlist: playlistReducer,
    users: userReducer,
}));

export const store = configureStore({
    reducer: persistedReducer,
});
                
export const persistor = persistStore(store);