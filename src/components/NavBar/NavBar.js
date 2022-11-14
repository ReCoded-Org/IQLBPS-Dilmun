import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  LOG_OUT,
  PROFILE,
  PRODUCT_ROUTE,
} from '../../route';
import LanguageButton from '../LanguageButton/LanguageButton';

const classNames = (...classes) => {
  return twMerge(classes);
};

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeNavBar = () => {
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    closeNavBar();
  }, [location.key]);
  return (
    <nav className="shadow-md w-full z-10 sticky top-0">
      <div className="md:flex py-2 items-center justify-between md:px-8 px-10 max-h-24 bg-background bg-opacity-30 backdrop-filter backdrop-blur-lg" >
        <div>
          <Link to={HOME_ROUTE}>
            <img
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1035627738440159303/Asset_23.png"
              className="object-scale-down h-20 md:justify-self-center py-0"
              alt="logo"
            />
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineClose className="text-6xl text-secondary absolute right-8 top-5 cursor-pointer md:hidden" />
          ) : (
            <FaBars className="text-6xl text-secondary absolute right-8 top-5 cursor-pointer md:hidden" />
          )}
        </button>
        <ul
          className={`flex items-center w-[150px]  md:justify-items-end  md:flex-row flex-col md:pb-0 pb-2 absolute md:static md:z-auto z-[-1] left-0  md:w-auto transition-all duration-500 ease-in ${open ? 'left-[0] bg-background  backdrop-filter backdrop-blur-lg mt-[-16px]' : 'left-[-100%]'
            }`}
        >
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={HOME_ROUTE}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-primary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={PRODUCT_ROUTE}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={ABOUT_ROUTE}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={PROFILE}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={SIGN_UP_ROUTE}
            >
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={SIGN_IN_ROUTE}
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames("md:ml-6 text-xl md:my-0 text-secondary hover:text-secondary duration-300", isActive ? "bg-tertiary text-secondary font-bold px-2 pb-1 rounded-md " : "")}
              to={LOG_OUT}
            >
              LogOut
            </NavLink>
          </li>
          <LanguageButton closeNavbar={closeNavBar} />
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
