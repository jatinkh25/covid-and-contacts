import { ContactForm } from '../components'

const CreateContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 mb-8 text-2xl font-medium text-center shadow-md rounded-xl bg-prim-bg-color w-fit">
        Create Contact
      </h1>
      <ContactForm />
    </div>
  )
}

export default CreateContactPage
