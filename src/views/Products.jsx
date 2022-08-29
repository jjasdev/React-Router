import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <div className="Products">
        <h1>Products</h1>
        <input type="search" placeholder="Search products"></input>
        <ul className="Products-container">
            <li className="Products-links">
                <Link className="Products-link" to="featured">Featured</Link>
                <Link className="Products-link" to="new">New</Link>
            </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Products