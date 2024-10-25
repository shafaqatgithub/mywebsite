import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Sidebarslice";
import themeReducer from "./ThemeSlice"

export const store = configureStore({
    reducer: {
      sidebar : sidebarReducer,
      theme : themeReducer
        
    },
  })