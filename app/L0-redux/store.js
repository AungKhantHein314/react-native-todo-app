import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./features/todoSlice";
import doneReducer from "./features/doneSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        dones: doneReducer,
    },
    devTools: true, // false
  });