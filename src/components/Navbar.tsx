import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { cartSelector } from "../app/features/cart/cartSlice";


const Navbar = () => {
  const {cartItems} = useSelector(cartSelector)

  return (
    <header className="bg-white rounded-md shadow mb-10">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <Link to="/" className="flex items-center whitespace-nowrap text-2xl font-black">
          <span className="text-black">LOGO</span>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <NavLink to={"/"} className="text-slate-600 md:mr-12 hover:text-slate-600">
              Pricing
            </NavLink>
            <NavLink to={"/"} className="text-slate-600 md:mr-12 hover:text-slate-600">
              Features
            </NavLink>
            <NavLink to={"/"} className="text-slate-600 md:mr-12 hover:text-slate-600">
              Cart({cartItems.length})
            </NavLink>
            <NavLink
              to={"/"}
              className="text-white md:mr-12 rounded-md px-6 py-1 font-medium transition-colors bg-slate-900"
            >
              Login
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
