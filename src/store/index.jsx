import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   // Add any additional middleware or configuration options here
// });

// export default store;