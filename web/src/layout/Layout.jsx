import { useEffect } from "react";
import { Link, Outlet, Navigate, useNavigate, useLocation } from "react-router-dom"
import { Avatar, Logo } from "../components/shared";
import { useAuth, useUser } from "@clerk/clerk-react";

export default function Layout(props) {
  const { profile } = props;
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { ...user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  window.signOut = signOut;

  useEffect(() => {
    if (location.pathname === '/') {
      console.log('user: ', user);
      navigate('/home');
    }
  }, [location])

  if (!isLoaded || !isSignedIn) {
    return <Navigate to="/signin" />
  }

  return (
    <div>
      <header className="border-b mb-3">
        <div className="flex justify-between p-3">
          <Link to="/user007" className="basis-1/2">
            <Avatar src={profile.userAvatar} />
          </Link>
          <Logo src="/images/harada.jpg"/>
          <div className="basis-1/2"></div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <nav>
          <ul className="flex justify-between py-3 px-8">
            <li>
              <Link to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/notifications">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/messages">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}