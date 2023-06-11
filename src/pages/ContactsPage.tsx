import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks'
import { deleteContact } from '../redux/slices/ContactSlice'

const ContactList = () => {
  const contacts = useAppSelector((state) => state.contacts.data)
  const dispatch = useAppDispatch()

  // Function to delete the contact
  const handleDeleteContact = (contactId: string) => {
    dispatch(deleteContact(contactId))
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 mb-6 text-2xl font-medium text-center shadow-md rounded-xl bg-prim-bg-color w-fit">
        Contact List
      </h1>
      <Link
        to="/contacts/new"
        className="px-4 py-2 mb-6 font-medium text-white bg-dark-blue rounded-3xl hover:bg-blue-dark"
      >
        Create Contact
      </Link>
      {contacts.length === 0 ? (
        <div className="w-full p-4 text-center">
          <p>No contacts available.</p>
        </div>
      ) : (
        <ul className="flex flex-wrap items-center justify-center sm:justify-start w-full gap-4 sm:gap-6">
          {contacts.map((contact) => (
            <li key={contact.id} className="bg-prim-bg-color p-4 shadow-md">
              <p>
                <strong>First Name:</strong> {contact.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {contact.lastName}
              </p>
              <p>
                <strong>Status:</strong> {contact.status}
              </p>
              <div className="mt-2">
                <Link
                  to={`/contacts/${contact.id}/edit`}
                  className="mr-2 text-dark-blue hover:text-blue-800 border-2 py-1 px-3 rounded-2xl border-dark-blue"
                >
                  Edit Contact
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-red-600 hover:text-red-800 border-2 py-1 px-3 rounded-2xl border-red-600"
                >
                  Delete Contact
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ContactList
