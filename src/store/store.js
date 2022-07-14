import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './chart'
//import thunk from "redux-thunk";

export default configureStore({
    reducer: {
      data: dataReducer
    }
  })