import { baseUrl } from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

export const fetchWeather = () => (dispatch) => {

    dispatch(weatherLoading(true));

    return fetch(baseUrl + 'weather')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(weather => dispatch(addWeather(weather)))
    .catch(error => dispatch(weatherFailed(error.message)));
}

export const weatherLoading = () => ({
    type: ActionTypes.WEATHER_LOADING
});

export const weatherFailed = (errmess) => ({
    type: ActionTypes.WEATHER_FAILED,
    payload: errmess
});

export const addWeather = (weather) => ({
    type: ActionTypes.ADD_WEATHER,
    payload: weather
});

export const postFeedback = (location) => (dispatch) => {

    const newFeedback = {
        location: location
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'update', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
         error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .catch(error => {console.log('Update Location', error.message); alert('Location could not be updated\n' + error.message);});
}