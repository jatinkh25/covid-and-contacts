import { Navigate, Route, Routes } from 'react-router-dom'
import {
  ContactsPage,
  CovidDashboard,
  CreateContactPage,
  EditContactPage,
  ErrorPage,
} from './pages'
import { Layout } from './components'

function App() {
  return (
    <Routes>
      <Route
        path="/contacts"
        element={
          <Layout>
            <ContactsPage />
          </Layout>
        }
      />
      <Route
        path="/contacts/new"
        element={
          <Layout>
            <CreateContactPage />
          </Layout>
        }
      />
      <Route
        path="/contacts/:contactId/edit"
        element={
          <Layout>
            <EditContactPage />
          </Layout>
        }
      />
      <Route
        path="/covid-dashboard"
        element={
          <Layout>
            <CovidDashboard />
          </Layout>
        }
      />
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
