
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
        <h1>Not found page</h1>

        <Link to={"/"}>
        <button>Go to home</button>
        </Link>
    </div>
  )
}
