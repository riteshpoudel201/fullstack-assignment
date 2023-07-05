import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from './loginpopup';
import SignupPopup from './signuppopup';
import { useAuth } from './authcontext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  // const [isLogged, setIsLogged] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginPopup = () => {
    setLoginOpen(!isLoginOpen);
  };

  const toggleSignupPopup = () => {
    setSignupOpen(!isSignupOpen);
  };



  return (
    <nav className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className='text-light-300'>Book</span><span className='text-red-400'>Store</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link to="/book" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Books</Link>
                    <Link to="/cart" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            isLoggedIn ? (
              <div>
                <button onClick={() => setIsLoggedIn(false)} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <button onClick={toggleLoginPopup} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Login</button>
                    <LoginPopup isOpen={isLoginOpen} onClose={toggleLoginPopup} />
                  </div><div>
                    <button onClick={toggleSignupPopup} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Signup</button>
                    <SignupPopup isOpen={isSignupOpen} onClose={toggleSignupPopup} />
                  </div>
                </div>
              </div>
            )
          }
          {/* <div className="flex items-center justify-between">
            <button className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Login</button>
            <LoginPopup isOpen={isLoginOpen} onClose={toggleLoginPopup} />
            <button className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Signup</button>
            <SignupPopup isOpen={isSignupOpen} onClose={toggleSignupPopup} />
          </div> */}


        </div>
        <div className="-mr-2 flex md:hidden">
          <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>


      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Books</a>
          <a href="/contact" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Cart</a>
          <a href="/login" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Login</a>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
