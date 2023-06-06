import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/photo/photoSlice";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  photoReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
