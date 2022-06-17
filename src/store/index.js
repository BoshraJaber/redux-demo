
// 4. create the store

import { combineReducers, createStore } from 'redux';
import voteReducer from './redux';


const reducer = combineReducers({ voteReducer });

const store = () => {
    return createStore(reducer);
}


export default store();