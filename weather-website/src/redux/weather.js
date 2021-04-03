import * as ActionTypes from './ActionTypes';

export const Weather = (state = {
    isLoading: true,
    errMess: null,
    weather:[]

}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WEATHER:
            return {...state, isLoading: false, errMess: null, weather: action.payload};

        case ActionTypes.WEATHER_LOADING:
            return {...state, isLoading: true, errMess: null, weather: []}

        case ActionTypes.WEATHER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};