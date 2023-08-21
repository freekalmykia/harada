import { Link, Outlet } from "react-router-dom"

export default function() {
  return (
    <div>
      <h1 className="text-3xl">Twitter</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/user007">Profile</Link>
          </li>
        </ul>
      </nav>

      <hr className="mb-5"/>

      <Outlet />
    </div>
  )
}