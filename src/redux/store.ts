import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/ContactSlice'
import sidebarReducer from './slices/SidebarSlice'

// Configure the Redux store with multiple reducers
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Reducer for managing contact data
    sidebar: sidebarReducer, // Reducer for managing sidebar state
  },
})

// Define the type for the dispatch function
export type AppDispatch = typeof store.dispatch

// Define the type for the root state of the Redux store
export type RootState = ReturnType<typeof store.getState>
