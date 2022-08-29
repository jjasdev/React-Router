import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth"

const Profile = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    
    console.log(auth);
    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    }

  return (
    <div className="Users">
        <h1>Perfil de usuario</h1>
        <p>Bienvenido {auth.user}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile