import { configureStore, combineReducers } from "@reduxjs/toolkit";

import topNavSlice from "./topNavSlice";

// const store = configureStore({
//     reducer: {
//         topNav: topNavSlice.reducer,
//     }
// });

// export default store;

const rootReducer = combineReducers({
    topNav: topNavSlice.reducer,
  })
  
  export const setupStore = preloadedState => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }