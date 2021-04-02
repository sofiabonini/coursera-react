import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes:[]

}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            // action.payload carries 'dishes' information
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            // with "..." i change the state object
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};