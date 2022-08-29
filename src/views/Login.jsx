import { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';
    
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, {replace: true});
  }
  
  return (
    
    <div>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" onChange={(e) => setUser(e.target.value)}></input>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login