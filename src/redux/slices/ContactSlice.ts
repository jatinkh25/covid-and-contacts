import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact, ContactsState } from '../../utils/types'

const initialState: ContactsState = {
  data: [],
}

// Create a slice for managing contacts
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Action to add a contact
    addContact(state, action: PayloadAction<Contact>) {
      state.data.push(action.payload) // Add the new contact to the state
    },
    // Action to edit a contact
    editContact(state, action: PayloadAction<Contact>) {
      const { id, ...contactData } = action.payload // Extract the contact ID and updated data
      const contactIndex = state.data.findIndex((contact) => contact.id === id) // Find the index of the contact to edit
      if (contactIndex !== -1) {
        // If the contact exists
        state.data[contactIndex] = { ...state.data[contactIndex], ...contactData } // Update the contact data
      }
    },
    // Action to delete a contact
    deleteContact(state, action: PayloadAction<string>) {
      state.data = state.data.filter((contact) => contact.id !== action.payload) // Remove the contact from the state
    },
  },
})

export const { addContact, editContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer
