import { createStore } from "redux";
import {ageReducer} from './ageReducer';

export const initState ={
    name: 'minh thanh',
    age: 21,
    description: ''
}

export const configureStore3 = () => {
    const store = createStore(ageReducer ,initState)
    return store;
}