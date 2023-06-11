import { createSlice } from '@reduxjs/toolkit'
import { SidebarState } from '../../utils/types'

const initialState: SidebarState = {
  isSidebarOpen: false,
}

// Create a slice for managing the sidebar state
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    // Action to toggle the sidebar
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen // Toggle the value of isSidebarOpen
    },
  },
})

export const { toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
