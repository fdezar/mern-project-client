import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   // Add any additional middleware or configuration options here
// });

// export default store;