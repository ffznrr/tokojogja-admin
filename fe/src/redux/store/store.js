import { combineReducers, createStore } from "redux";
import hitungReducer from "../reducer/reducerTester";


const root = combineReducers({
    hitungReducer
})

const store = createStore(root);

export default store;