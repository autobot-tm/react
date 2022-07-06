// export const initState = {
//     count: 1000
// };

// export const Reducer = (state = initState, action) => {
//     switch (action.type) {
//         case "INCRE":
//             return {
//                 count: state.count + 1
            
//             }
//             break;
//         case "DECRE":
//             return {
//                 count: state.count - 1
//             }
//             break;
//         default:
//             return state;
//     }
// }

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const initState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initState, action) => {
    return state;
}