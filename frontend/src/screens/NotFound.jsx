import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Error 404 Not Not Found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default NotFound 