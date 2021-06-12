import React from 'react';

/* Create Store and Check each Step*/
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

/*Reducer*/
import Reducer from './reducer'

const store = createStore(Reducer, applyMiddleware(logger));

export default store;