import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../hooks'
import { addContact, editContact } from '../redux/slices/ContactSlice'
import { Error } from '.'
import { ContactFormProps } from '../utils/types'

const ContactForm = ({ initialValues }: ContactFormProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: initialValues?.firstName || '',
      lastName: initialValues?.lastName || '',
      status: initialValues?.status || '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values) => {
      const contact = {
        id: initialValues?.id || uuidv4(), // Generate unique ID if not provided
        ...values,
      }
      if (initialValues) {
        dispatch(editContact(contact)) // Dispatch the action to edit the contact
      } else {
        dispatch(addContact(contact)) // Dispatch the action to add the contact
      }
      formik.resetForm() // Reset the form after submission
      navigate('/')
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[600px] p-6 sm:p-8 bg-prim-bg-color shadow-md rounded-2xl"
    >
      <div className="mb-4">
        <label htmlFor="firstName" className="block">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full p-2 border"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Error errorMessage={formik.errors.firstName} />
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full p-2 border"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Error errorMessage={formik.errors.lastName} />
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block">
          Status
        </label>
        <select
          id="status"
          name="status"
          className="w-full p-2 border"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {formik.touched.status && formik.errors.status ? (
          <Error errorMessage={formik.errors.status} />
        ) : null}
      </div>

      <div>
        <button type="submit" className="px-4 py-2 text-gray-800 border-2 border-gray-300 rounded">
          Submit
        </button>
        <Link to="/" className="px-4 py-2 ml-4 text-gray-800 bg-gray-300 rounded">
          Cancel
        </Link>
      </div>
    </form>
  )
}

export default ContactForm
