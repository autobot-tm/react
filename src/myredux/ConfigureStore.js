import {createStore};
import { Reducer, initState } from "./Reducer";

export const ConfigureStore() => {
    const = createStore(Reducer, initState);
    return store;
}