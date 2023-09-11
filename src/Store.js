import { applyMiddleware, createStore, con } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import reducers from "./reduxThunk";
import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";
import logger from "redux-logger"

const persistConfig = {
    key: 'root',
    storage: storage
}
const Store = () => {
    const middlewares = [thunk, logger];
    const enhancer = applyMiddleware(...middlewares);
    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistedReducer, enhancer);

    const persistor = persistStore(store);

    return { store, persistor }

};


export default Store;
