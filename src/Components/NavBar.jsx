import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();  // Use useLocation to get the current path

  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* Logo */}
              <div>
                <Link to="/" className="flex gap-1 font-bold text-gray-700 items-center">
                  <svg
                    width="176.98546489697534"
                    height="186.17812499999997"
                    viewBox="0 0 304.078913767193 319.8728327784853"
                    className="h-20 w-20 text-primary"    >
                    <defs>
                      <linearGradient id="SvgjsLinearGradient3361">
                        <stop id="SvgjsStop3362" stopColor="#834f2a" offset="0"></stop>
                        <stop id="SvgjsStop3363" stopColor="#dba173" offset="0.5"></stop>
                        <stop id="SvgjsStop3364" stopColor="#834F2A" offset="1"></stop>
                      </linearGradient>
                      <linearGradient id="SvgjsLinearGradient3365">
                        <stop id="SvgjsStop3366" stopColor="#834f2a" offset="0"></stop>
                        <stop id="SvgjsStop3367" stopColor="#dba173" offset="0.5"></stop>
                        <stop id="SvgjsStop3368" stopColor="#834F2A" offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <g
                      id="SvgjsG3357"
                      featurekey="symbolFeature-0"
                      transform="matrix(2.5339909480599423,0,0,2.5339909480599423,25.1162353504415,-10.13596379223977)"
                      fill="url(#SvgjsLinearGradient3361)"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M74,90V10c0-3.3-2.7-6-6-6H32c-3.3,0-6,2.7-6,6v80c0,3.3,2.7,6,6,6h36C71.3,96,74,93.3,74,90z M46,8h8v2h-8V8z M50,92 c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C54,90.2,52.2,92,50,92z M70,80H30V14h40V80z"
                      ></path>
                    </g>
                    <g
                      id="SvgjsG3358"
                      featurekey="nameFeature-0"
                      transform="matrix(2.0484280289942944,0,0,2.0484280289942944,-2.4581151976197133,228.50688009040613)"
                      fill="url(#SvgjsLinearGradient3365)"
                    >
                      <path d="M11.04 11.96 l3.16 0 l-1.88 6.24 l-0.4 1.32 c-0.16 0.52 -0.32 1 -0.44 1.52 c-0.24 0.72 -0.48 1.48 -0.68 2.2 l-0.28 0.96 l-1 3.2 l0 4 l0 1 l0 0.92 l0 2.24 l0 1.48 l0 1.32 l0 6.24 l-3.6 0 l0 -0.8 l0 -1.36 l0 -12.24 l0 -2.56 c-1.56 -5.24 -3.12 -10.44 -4.72 -15.68 l3.16 0 l3.32 11.12 z M29.565 21.8 l0 12.88 l0 2.92 c0 0.52 -0.04 1.04 -0.08 1.56 c-0.16 1.6 -1.04 5.44 -5.32 5.44 c-4.6 0 -5.24 -4.64 -5.36 -5.96 l0 -1.08 l0 -0.96 l0 -17.32 l0 -1.16 c0 -0.24 0.04 -0.48 0.04 -0.72 c0.12 -0.92 0.8 -5.44 5.48 -5.44 c4.16 0 5 3.96 5.16 5.56 c0.04 0.48 0.08 1 0.08 1.48 l0 2.8 z M26.085 38.84 c0.04 -0.4 0.04 -0.84 0.04 -1.24 l0 -3.96 l0 -11.88 l0 -2.6 c0 -0.44 0 -0.88 -0.04 -1.32 c-0.04 -0.36 -0.12 -0.68 -0.2 -1.04 c-0.08 -0.2 -0.2 -0.4 -0.32 -0.6 c-0.24 -0.36 -0.56 -0.6 -1 -0.68 c-0.2 -0.04 -0.4 -0.04 -0.6 0 c-0.44 0.08 -0.8 0.32 -1.04 0.76 c-0.2 0.28 -0.28 0.6 -0.36 0.96 c-0.08 0.4 -0.16 0.76 -0.16 1.2 l0 0.56 l0 18.64 c0 0.44 0 0.88 0.08 1.32 c0.04 0.28 0.08 0.56 0.2 0.84 l0.16 0.4 c0.28 0.52 0.72 0.8 1.28 0.84 c0.2 0.04 0.4 0 0.6 -0.04 c0.36 -0.08 0.64 -0.32 0.84 -0.64 c0.16 -0.16 0.24 -0.36 0.32 -0.56 c0.08 -0.32 0.16 -0.64 0.2 -0.96 z M44.93 32.96 l0 0.08 l0 0.92 l0 0.12 l0 3.52 c0 0.52 -0.04 1.04 -0.08 1.56 c-0.16 1.6 -1.04 5.44 -5.32 5.44 c-4.6 0 -5.24 -4.64 -5.36 -5.96 l0 -1.08 l0 -0.96 l0 -10.8 l0 -13.84 l1.52 0 l1.88 0 l0.2 0 l0 12.68 l0 0.88 l0 0.64 l0 11.48 c0 0.44 0 0.88 0.08 1.32 c0.04 0.28 0.08 0.56 0.2 0.84 l0.16 0.4 c0.28 0.52 0.72 0.8 1.28 0.84 c0.2 0.04 0.4 0 0.6 -0.04 c0.36 -0.08 0.64 -0.32 0.84 -0.64 c0.16 -0.16 0.24 -0.36 0.32 -0.56 c0.08 -0.32 0.16 -0.64 0.2 -0.96 c0.04 -0.4 0.04 -0.84 0.04 -1.24 l0 -2.04 l0 -23.6 l2.44 0 l0.12 0 l0.88 0 l0 21 z M58.575 38.36 l1.8 6.24 l-3.6 0 l-3.12 -10.88 l0 0.04 l-0.52 -1.68 l0 1.24 l0 2.24 l0 1.48 l0 1.32 l0 6.24 l-3.6 0 l0 -16.32 l0 -8.56 l0 -4.68 l0 -3.08 l5.92 0 s4.8 -0.2 4.88 7.6 c0 0.08 0 0.2 0.04 0.28 l0 0.32 l-0.08 1.64 c-0.04 0.12 -0.04 0.28 -0.04 0.4 c0 0 -0.16 1.8 -0.68 3.08 l-0.08 0.16 c-1.16 2.52 -3.08 2.92 -3.76 3 l0.2 0.76 l0.92 3.2 l0.28 0.92 c0.24 0.76 0.44 1.48 0.64 2.24 l0.44 1.48 z M53.135 20.32 l0 3.2 l0 0.92 c0 0.4 0 0.4 0.32 0.4 l1.4 0 c0.2 0 0.4 -0.04 0.56 -0.08 c0.32 -0.12 0.56 -0.32 0.76 -0.6 c0.12 -0.2 0.24 -0.44 0.28 -0.68 l0.04 0 c0 -0.12 0.04 -0.2 0.04 -0.32 c0.08 -0.28 0.12 -0.6 0.16 -0.92 c0.04 -0.48 0.04 -0.96 0.04 -1.44 l0 -1.24 c0 -0.48 0 -0.96 -0.04 -1.48 c-0.04 -0.4 -0.12 -0.76 -0.24 -1.16 c-0.04 -0.24 -0.16 -0.44 -0.28 -0.64 c-0.2 -0.32 -0.44 -0.48 -0.76 -0.6 c-0.16 -0.08 -0.36 -0.08 -0.56 -0.08 l-1.4 0 c-0.32 0 -0.32 0 -0.32 0.36 l0 1.28 l0 2.88 l0 0.08 l0 0.12 z M85.065 34.76 l0 2.68 c0 0.68 0 1.4 -0.08 2.08 c-0.04 0.4 -0.08 0.8 -0.16 1.16 l0 0.12 c0 0.04 -0.04 0.08 -0.04 0.16 l0 0.04 c-0.8 3.84 -4.8 3.6 -4.8 3.6 l-6.08 0 l0 -16.32 l0 -16.32 l5.92 0 s4.76 -0.2 4.88 7.6 l0 0.28 l0 0.32 c0 0.56 0 1.08 -0.04 1.64 c-0.08 0.88 -0.24 1.72 -0.48 2.56 c-0.12 0.44 -0.32 0.84 -0.52 1.24 c-0.28 0.48 -0.64 0.92 -1.04 1.28 l-0.2 0.16 c-0.04 0.04 -0.04 0.12 0 0.16 l0.24 0.16 c0.4 0.28 0.76 0.68 1.08 1.12 c0.2 0.32 0.36 0.64 0.52 1 c0.24 0.56 0.4 1.16 0.52 1.76 c0.12 0.56 0.2 1.12 0.24 1.72 s0.04 1.2 0.04 1.8 z M77.505 20.32 l0 3.2 l0 2.2 l1.64 0 s1.16 0.32 1.76 -2.56 c0.08 -0.28 0.12 -0.6 0.16 -0.92 c0.04 -0.48 0.04 -0.96 0.04 -1.44 l0 -1.24 c0 -0.48 0 -0.96 -0.04 -1.48 c-0.04 -0.4 -0.12 -0.76 -0.24 -1.16 c-0.04 -0.24 -0.16 -0.44 -0.28 -0.64 c-0.2 -0.32 -0.44 -0.48 -0.76 -0.6 c-0.2 -0.08 -0.36 -0.08 -0.56 -0.08 l-1.4 0 c-0.32 0 -0.32 0 -0.32 0.36 l0 4.36 z M81.465 37.6 l0 -3.36 c0 -0.52 -0.04 -1 -0.08 -1.48 c0 -0.12 -0.04 -0.24 -0.04 -0.36 c-0.4 -3.24 -1.96 -3.04 -1.96 -3.04 l-1.88 0 l0 2 l0 4.2 l0 1.48 l0 3.48 c0 0.12 0 0.24 0.04 0.36 c0 0.04 0.04 0.08 0.04 0.08 l0.16 0 l1.88 0 l0.28 0 c0.48 -0.08 0.84 -0.32 1.08 -0.76 c0.08 -0.12 0.12 -0.24 0.16 -0.36 c0.08 -0.2 0.16 -0.44 0.2 -0.64 c0.08 -0.52 0.12 -1.08 0.12 -1.6 z M100.43 32.96 l0 0.08 l0 0.92 l0 0.12 l0 3.52 c0 0.52 -0.04 1.04 -0.08 1.56 c-0.16 1.6 -1.04 5.44 -5.32 5.44 c-4.6 0 -5.24 -4.64 -5.36 -5.96 l0 -1.08 l0 -0.96 l0 -10.8 l0 -13.84 l1.52 0 l1.88 0 l0.2 0 l0 12.68 l0 0.88 l0 0.64 l0 11.48 c0 0.44 0 0.88 0.08 1.32 c0.04 0.28 0.08 0.56 0.2 0.84 l0.16 0.4 c0.28 0.52 0.72 0.8 1.28 0.84 c0.2 0.04 0.4 0 0.6 -0.04 c0.36 -0.08 0.64 -0.32 0.84 -0.64 c0.16 -0.16 0.24 -0.36 0.32 -0.56 c0.08 -0.32 0.16 -0.64 0.2 -0.96 c0.04 -0.4 0.04 -0.84 0.04 -1.24 l0 -2.04 l0 -23.6 l2.44 0 l0.12 0 l0.88 0 l0 21 z M116.235 20.68 l0 14.92 l0 1.84 c0 0.68 -0.04 1.4 -0.08 2.08 c-0.04 0.4 -0.08 0.8 -0.16 1.16 c0 0.04 0 0.08 -0.04 0.12 l0 0.16 l-0.04 0.04 c-0.76 3.84 -4.76 3.6 -4.76 3.6 l-1.32 0 l-2.04 0 l-2.76 0 l0 -16.32 c0 -5.44 0 -10.88 0.04 -16.32 l3.6 0 l2.48 0 s4 -0.24 4.76 3.6 c0.04 0.04 0.04 0.04 0.04 0.08 l0 0.12 c0.04 0.04 0.04 0.08 0.04 0.12 c0.08 0.4 0.12 0.76 0.16 1.16 c0.04 0.68 0.08 1.4 0.08 2.08 l0 1.56 z M112.595 37.6 l0 -1.32 l0 -0.12 l0 -0.16 l0 -13.76 l0 -0.2 l0 -3.08 c0 -0.52 -0.04 -1.04 -0.12 -1.6 c-0.04 -0.2 -0.08 -0.4 -0.16 -0.6 c-0.04 -0.16 -0.12 -0.28 -0.16 -0.4 c-0.28 -0.44 -0.64 -0.68 -1.12 -0.76 l-0.24 0 l-1.12 0 l-1 0 l0 0.28 l0 0.08 l0 4.36 l0 1.28 l0 0.8 l0 1.12 l-0.04 2.2 l0.04 0 l0 2.56 l0 5.8 l0 1.48 l0 1.48 l0 3.48 l0 0.36 c0 0.04 0.04 0.08 0.08 0.08 l0.16 0 l1.88 0 l0.24 0 c0.48 -0.08 0.84 -0.32 1.12 -0.76 l0.16 -0.36 c0.08 -0.2 0.12 -0.44 0.16 -0.64 c0.08 -0.52 0.12 -1.08 0.12 -1.6 z M132.04 20.68 l0 14.92 l0 1.84 c0 0.68 -0.04 1.4 -0.08 2.08 c-0.04 0.4 -0.08 0.8 -0.16 1.16 c0 0.04 0 0.08 -0.04 0.12 l0 0.16 l-0.04 0.04 c-0.76 3.84 -4.76 3.6 -4.76 3.6 l-1.32 0 l-2.04 0 l-2.76 0 l0 -16.32 c0 -5.44 0 -10.88 0.04 -16.32 l3.6 0 l2.48 0 s4 -0.24 4.76 3.6 c0.04 0.04 0.04 0.04 0.04 0.08 l0 0.12 c0.04 0.04 0.04 0.08 0.04 0.12 c0.08 0.4 0.12 0.76 0.16 1.16 c0.04 0.68 0.08 1.4 0.08 2.08 l0 1.56 z M128.39999999999998 37.6 l0 -1.32 l0 -0.12 l0 -0.16 l0 -13.76 l0 -0.2 l0 -3.08 c0 -0.52 -0.04 -1.04 -0.12 -1.6 c-0.04 -0.2 -0.08 -0.4 -0.16 -0.6 c-0.04 -0.16 -0.12 -0.28 -0.16 -0.4 c-0.28 -0.44 -0.64 -0.68 -1.12 -0.76 l-0.24 0 l-1.12 0 l-1 0 l0 0.28 l0 0.08 l0 4.36 l0 1.28 l0 0.8 l0 1.12 l-0.04 2.2 l0.04 0 l0 2.56 l0 5.8 l0 1.48 l0 1.48 l0 3.48 l0 0.36 c0 0.04 0.04 0.08 0.08 0.08 l0.16 0 l1.88 0 l0.24 0 c0.48 -0.08 0.84 -0.32 1.12 -0.76 l0.16 -0.36 c0.08 -0.2 0.12 -0.44 0.16 -0.64 c0.08 -0.52 0.12 -1.08 0.12 -1.6 z M146.48499999999999 11.96 l3.16 0 l-1.88 6.24 l-0.4 1.32 c-0.16 0.52 -0.32 1 -0.44 1.52 c-0.24 0.72 -0.48 1.48 -0.68 2.2 l-0.28 0.96 l-1 3.2 l0 4 l0 1 l0 0.92 l0 2.24 l0 1.48 l0 1.32 l0 6.24 l-3.6 0 l0 -0.8 l0 -1.36 l0 -12.24 l0 -2.56 c-1.56 -5.24 -3.12 -10.44 -4.72 -15.68 l3.16 0 l3.32 11.12 z" />
                    </g>
                  </svg>
                </Link>
              </div>
              {/* Primary Links */}
              <div className="hidden lg:flex gap-8 items-center">
                <Link to="/" className={location.pathname === "/" ? "text-blue-500  bg-blue-50  rounded-md p-2 font-bold" : ""}>
                  Home
                </Link>
                <Link to="/latest-deals" className={location.pathname === "/latest-deals" ? "text-blue-500  bg-blue-50  rounded-md p-2 font-bold" : ""}>
                  Latest Deals
                </Link>
                <Link to="/about-us" className={location.pathname === "/about-us" ? "text-blue-500  bg-blue-50  rounded-md p-2 font-bold" : ""}>
                  About Us
                </Link>
                <Link to="/contact-us" className={location.pathname === "/contact-us" ? "text-blue-500  bg-blue-50  rounded-md p-2 font-bold" : ""}>
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Secondary buttons */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"}`}
        >
           <div className="px-8 py-4 space-y-4">
        <div>
          <Link
            to="/"
            className={`block text-lg py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 ${location.pathname === "/" ? "bg-blue-500 font-bold" : ""}`}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/latest-deals"
            className={`block text-lg py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 ${location.pathname === "/latest-deals" ? "bg-blue-500 font-bold" : ""}`}
          >
            Latest Deals
          </Link>
        </div>
        <div>
          <Link
            to="/about-us"
            className={`block text-lg py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 ${location.pathname === "/about-us" ? "bg-blue-500 font-bold" : ""}`}
          >
            About Us
          </Link>
        </div>
        <div>
          <Link
            to="/contact-us"
            className={`block text-lg py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 ${location.pathname === "/contact-us" ? "bg-blue-500 font-bold" : ""}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
