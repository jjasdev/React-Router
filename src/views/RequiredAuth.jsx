import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'

const RequiredAuth = ( {children} ) => {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    useEffect(() => {
      if (!auth.user){
        return (
          navigate('/login', {
            replace: true,
            state: {
              path: location.pathname,
            }
          })
        )
      }
    });

    // if (!auth.user) {
    //     return (
    //         <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
    //     )
    // } 

  return children
}

export default RequiredAuth