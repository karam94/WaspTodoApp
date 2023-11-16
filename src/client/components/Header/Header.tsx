import React from "react";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon/Icon";

interface HeaderProps {
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ logout }) => {
  return (
    <>
      {/* <nav className="bg-amber-700 p-4 w-full fixed top-0 flex justify-between items-center">
        <span role="img" aria-label="bee" className="text-2xl mr-2">
          🐝
        </span>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={logout}
        >
          <Icon icon={faDoorOpen} />
        </button>
      </nav> */}

      <div className="navbar bg-amber-700 w-full fixed top-0 flex justify-between items-center">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🐝</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcfQw3z4DpwaWBD6_-bgLqTmTroFq98aFrx2_uObZkg&s"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
