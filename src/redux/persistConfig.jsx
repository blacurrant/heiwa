import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['login', 'playlist', 'data', 'users', 'loginState'], // Reducers to persist
  };
  
  export default persistConfig;