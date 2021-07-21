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
          className="focus:outline-none bg-transparent text-sm"
        />
      </div>
      <nav className="mr-10 flex items-center text-black text-sm font-semibold space-x-12">
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
        <ul className="flex items-center space-x-6">
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
