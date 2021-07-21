import React from 'react'
import Image from 'next/image'
import { Logo } from '~/utils/Icon'
import { sidebarLinks } from '~/mock/data'

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col justify-between max-w-[300px] min-h-screen h-full w-full py-8 px-12">
      <div className="flex flex-col space-y-12">
        <Logo className="w-24 h-14" />
        <div className="flex flex-col space-y-10">
          <h1 className="text-black text-2xl font-bold">Explore</h1>
          <nav>
            <ul className="space-y-6">
              {sidebarLinks.map(({ icon, title }, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center space-x-4 hover:underline transition ease-in-out duration-150"
                  >
                    <div className="relative w-6 h-6">
                      <Image src={icon} layout="fill" alt={icon} />
                    </div>
                    <span className="text-black font-semibold text-sm">
                      {title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="inline-flex items-center justify-center p-2 bg-white rounded-full">
          <Image src="/svgs/message.svg" width={23} height={22} alt="message" />
        </div>
        <a
          href="#"
          className="text-black font-medium text-sm hover:underline transition ease-in-out duration-150"
        >
          Help Center
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
