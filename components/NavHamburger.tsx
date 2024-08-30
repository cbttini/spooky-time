import React from "react";
import Link from "next/link";

function NavHamburger() {
  return (
    <div className="dropdown dropdown-end lg:hidden ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-md btn-ghost btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-[#44465D] rounded-box z-[1] mt-2 w-48 shadow text-lg "
      >
        <Link href="/riddles">
          <li className=" hover:text-gray-400 btn btn-link text-white text-lg no-underline hover:no-underline">
            Riddles
          </li>
        </Link>
        <Link href="/about">
          <li className=" hover:text-gray-400 btn btn-link text-white text-lg no-underline hover:no-underline">
            About
          </li>
        </Link>
        <Link href={process.env.SPIRIT_URL} target="_blank">
          <li className=" hover:text-gray-400 btn btn-link text-white text-lg no-underline  hover:no-underline">
            Shop Spirit
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavHamburger;
