import { AlertIcon } from '../assets/svgs'
import { ErrorProps } from '../utils/types'

function ErrorMessage({ errorMessage }: ErrorProps) {
  if (Array.isArray(errorMessage)) {
    return (
      <div>
        {errorMessage.map((error) => (
          <p key={error.toString()}>{error.toString()}</p>
        ))}
      </div>
    )
  }

  return <p className="text-xs text-red-500">{errorMessage}</p>
}

function Error({ errorMessage }: ErrorProps) {
  return (
    <div className="flex items-center self-start gap-2 pt-4">
      <AlertIcon />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  )
}

export default Error
