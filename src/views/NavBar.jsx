import { NavLink } from "react-router-dom"
import { useAuth } from "./Auth"

const NavBar = () => {

    const auth = useAuth();

    const navBarStyles = ( {isActive} ) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

  return (
    <nav>
        <NavLink style={navBarStyles} to="/">Home</NavLink>
        <NavLink style={navBarStyles} to="/about">About</NavLink>
        <NavLink style={navBarStyles} to="/products">Products</NavLink>
        <NavLink style={navBarStyles} to="/users">Users</NavLink>
        <NavLink style={navBarStyles} to="/profile">Profile</NavLink>
        { !auth.user && (
            <NavLink style={navBarStyles} to="/login">Login</NavLink>
        )}
    </nav>
)
}

export default NavBar