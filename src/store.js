import { createStore } from "redux";
import {rootred} from "./redux/reducers/main";

const store = createStore(
    rootred )
    
    console.log(store.getState())  

export default store;

