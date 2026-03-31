import { LucideShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 pt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  href=""
                  className="text-base no-underline link hover:link-primary"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-base no-underline link hover:link-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-base no-underline link hover:link-primary"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-base no-underline link hover:link-primary"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 px-1">
            <li>
              <a
                href=""
                className="text-base no-underline link hover:link-primary"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href=""
                className="text-base no-underline link hover:link-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-base no-underline link hover:link-primary"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-base no-underline link hover:link-primary"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <LucideShoppingCart />{" "}
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div className="gap-4 items-center hidden md:flex ">
            <a className="font-normal text-base no-underline link hover:link-primary">
              Login
            </a>
            <a className="btn text-white rounded-full font-normal bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-base">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;