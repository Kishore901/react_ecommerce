import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <nav className="text-right p-4 shadow-md">
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="font-bold font-body text-2xl text-gray-600">
            BuyTruCryp
          </h1>
        </Link>

        <div className="flex mr-10 font-semibold text-gray-600">
          <Link to="/">
            <div className="mdNav mr-20">Home</div>
          </Link>
          <Link to="/wishlist">
            <div className="mdNav mr-20 ">Wishlist</div>
          </Link>
          <Link to="/cart">
            <div className="mdNav">Cart</div>
          </Link>
        </div>
        <div
          className="flex items-center px-4 cursor-pointer md:hidden"
          onClick={menuHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {menu && (
        <div className="text-gray-800 font-semibold bg-gray-400 md:hidden">
          <ul className="mx-2 py-2">
            <li className="mb-2">
              <Link to="/" className="flex justify-end">
                <span>Home</span>
                <svg
                  className="mx-2 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
            <li className="my-2">
              <Link to="/wishlist" className="flex justify-end">
                <span>Wishlist</span>
                <svg
                  className="w-6 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex justify-end">
                <span>Cart</span>
                <svg
                  className="mx-2 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
