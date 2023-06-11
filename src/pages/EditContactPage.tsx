import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { ContactForm } from '../components'

const EditContactPage = () => {
  const { contactId } = useParams()
  const contacts = useAppSelector((state) => state.contacts.data)
  const contact = contacts.find((c) => c.id === contactId)

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 mb-8 text-2xl font-medium text-center shadow-md rounded-xl bg-prim-bg-color w-fit">
        Edit Contact
      </h1>
      {contact ? <ContactForm initialValues={contact} /> : <p>Contact not found.</p>}
    </div>
  )
}

export default EditContactPage
