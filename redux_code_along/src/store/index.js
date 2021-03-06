// src -> store -> index.js

//this is the file where we will set up out store;

//Necessities and accessories for our Redux store
//combineReducers: will tkae all of youre reducer functions and put them into an object where...
//...the key:value signature looks like this: {nameOfReducerA: reducerFunction, nameofReducerB}

//combineReducers part II: when an action is dispatched to the store, combineReducers will loop through all of the keys of then combined reducers object, and it will invoke all of the reducer functions...
//... in this way, any case/switch statement that is relevant to te action will be called (multiple reducer swill be called {
import { createStore, applyMiddleware, combineReducers } from 'redux';

//createLogger: as demonstrated in class, you can see how the previous state looked prior to dispatching your objec, you can see the actual action object at hand being dispatched, and you can see the outcome of merging the previous state with your action object;
import { createLogger } from 'redux-logger';

//thunkMiddleware: all middleware runs inbetween point A and point B --- for this middleware specifically, what it will do is type check the action argument that is passed to the reducer function -- if it is an object, then it will pass it along to either te next middleware in the chain or it will pass it directly to the reducer function --- howeverm if it is a function that contains asynchronous calls, it will invoke that function, pass it the dispatch function

import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//here, we would want to import our reducer functions so that we can pass them along to your store;
import counterReducer from '../store/utilities/counter';


//this variable will hold the object that will contain all of youre reducers
const rootReducer = combineReducers({counterReducer} /*/reducers go here*/);
//logger: this is the logger we saw earlier --- by passing it collasped: ture, the contents of each object that is logged to the console will already be collasped
const logger = createLogger({collasped: true});
const middleware = composeWithDevTools(applyMiddleware(ThunkMiddleware, logger));
//create the store;
const store = createStore( rootReducer, middleware/*rootReducer goes here and middleware to follow as 2nd parameter*/);

//export this so that way we can pass it to the <Provider /> component so that way any connected component will be able to rference and communicate with that store
export default store;
