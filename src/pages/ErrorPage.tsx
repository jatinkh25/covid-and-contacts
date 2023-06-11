import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
      <p className="text-gray-600">We apologize for the inconvenience.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
