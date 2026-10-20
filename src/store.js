import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counterReducer";

const store = configureStore({
  reducer: {
    counter: counter,
  },
});
export default store
