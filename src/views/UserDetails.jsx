import { useParams } from "react-router-dom"

const UserDetails = () => {

    const { userId } = useParams();
  return (
    <div>
        <h1>Detalles del usuario <span>{userId}</span></h1>
    </div>
  )
}

export default UserDetails