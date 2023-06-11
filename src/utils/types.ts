import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface Contact {
  id: string
  firstName: string
  lastName: string
  status: string
}

export interface ContactFormProps {
  initialValues?: Contact
}

export interface ContactsState {
  data: Contact[]
}

export interface ErrorProps {
  errorMessage: string | string[]
}

export interface SidebarState {
  isSidebarOpen: boolean
}
