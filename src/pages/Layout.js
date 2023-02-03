import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className='h-screen'>
    <nav className="bg-black text-white flex justify-center">
        <ul className="flex flex-row space-x-3 ">
          <li className="border border-solid border-white">
            <Link to="/">Home</Link>
          </li>
          <li className="border border-solid border-white">
            <Link to="/search">Search</Link>
          </li>
          <li className="border border-solid border-white">
            <Link to="/empty">Empty</Link>
          </li>
          <li className="border border-solid border-white">
            <Link to="/sdgsdgsef">sdgsdgsef</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
      
    </>
  )
};

export default Layout;