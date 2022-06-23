export const initState = {
    count: 1000
};

export const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "INCRE":
            return {
                count: state.count + 1
            }
            break;
        case "DECRE":
            return {
                count: state.count - 1
            }

        default:
            return state;
    }
}