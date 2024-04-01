import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="border-b border-indigo-500 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <Link className="mr-4 flex flex-shrink-0 items-center" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="ml-2 hidden text-2xl font-bold text-white md:block">
                  React Jobs
                </span>
              </Link>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Link
                    to="/"
                    className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/jobs"
                    className="rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/add-job"
                    className="rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Add Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
