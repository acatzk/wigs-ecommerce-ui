import React from 'react'
import Image from 'next/image'
import { navbarLinks } from '~/mock/data'
import { SearchIcon } from '~/utils/Icon'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 pt-8 pb-6">
      <div className="flex items-center space-x-4">
        <SearchIcon className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search store"
          className="hidden md:block focus:outline-none bg-transparent text-sm"
        />
      </div>
      <nav className="mr-0 md:mr-10 flex items-center text-black text-sm font-semibold space-x-12">
        <div className="hidden md:block">
          <ul className="flex items-center space-x-10">
            {navbarLinks.map(({ title }, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`${
                    title === 'products' &&
                    'border-b-2 border-black pb-2 hover:border-gray-600'
                  } 
                  hover:text-gray-600 transition ease-in-out duration-150`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center space-x-6">
          <li className="block md:hidden">
            <button className="text-black hover:text-gray-600 transition ease-in-out duration-150">
              <svg
                className="w-6 h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className="relative w-6 h-6 hover:text-gray-600 transition ease-in-out duration-150">
              <Image src="/svgs/trash.svg" layout="fill" alt="trash-icon" />
            </button>
          </li>
          <li>
            <button className="relative w-6 h-6 hover:text-gray-600 transition ease-in-out duration-150">
              <Image src="/svgs/user.svg" layout="fill" alt="user-icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
