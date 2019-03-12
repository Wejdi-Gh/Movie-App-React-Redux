import { combineReducers, createStore } from "redux";
import Datareducer from "../reducers/data-reducer";
import Searchreducer from "../reducers/seachreducer";
import Ratestars from "../reducers/Startsrate-reducer";


const rootReducer = combineReducers({
    Datareducer , Searchreducer,Ratestars 
 })

const store = createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

export default store;