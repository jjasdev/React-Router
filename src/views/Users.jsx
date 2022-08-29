import { Link, Outlet, useSearchParams} from "react-router-dom"

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    
    return (

        <div className="Users">
            <h1>Users</h1>
            <ul>
                <li><Link to="1">User 1</Link></li>
                <li><Link to="2">User 2</Link></li>
                <li><Link to="3">User 3</Link></li>
            </ul>
            <Outlet />
            <div className="Users-options">
                <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Users</button>
            </div>
            {showActiveUsers ? 'Showing active users...' : 'Showing all users...'}
        </div>
    )
    }

export default Users