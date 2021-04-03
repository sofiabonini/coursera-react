import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Weather } from './weather';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            weather: Weather,
            ...createForms({
                update: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}