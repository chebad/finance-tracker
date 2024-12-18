import React from "react";

const Header = () => {
  return (
    <header className="z-40 flex h-16 w-full items-center justify-between">
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start h-16">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
