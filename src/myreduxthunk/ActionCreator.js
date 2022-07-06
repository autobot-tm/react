import * as ActionTypes from './ActionTypes';

export const loaddata = (text) => {
    console.log('ccc');
    return {
        type: ActionTypes.LOADDATA,
        payload:text
    }
};
export const displaydata = (data) => {
    return {
        type: ActionTypes.DISPLAYDATA,
        payload:data
    }
};

export const loading = () => (dispatch) => {
    console.log('bbbb');
    dispatch(loaddata('is loading....'));
    setTimeout(() => {
        dispatch(
            displaydata({ name: 'thanh', age: 21, description: 'display data' }))
    }, 2000);
};