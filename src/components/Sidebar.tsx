import React from 'react'
import Image from 'next/image'
import { Logo } from '~/utils/Icon'
import { sidebarLinks } from '~/mock/data'

const Sidebar: React.FC = () => {
  return (
    <aside className="top-0 flex flex-col items-center md:items-start justify-between max-w-[60px] md:max-w-[300px] min-h-screen h-full w-full py-8 px-0 md:px-2 lg:px-12">
      <div className="flex flex-col space-y-12">
        <Logo className="w-8 h-8 md:w-24 md:h-14" />
        <div className="flex flex-col space-y-10">
          <h1 className="text-black text-block md:text-2xl font-bold hidden md:block">
            Explore
          </h1>
          <nav>
            <ul className="space-y-6">
              {sidebarLinks.map(({ icon, title }, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center flex-shrink-0 flex-none space-x-4 hover:underline transition ease-in-out duration-150"
                  >
                    <Image src={icon} width={25} height={25} alt={icon} />
                    <h1 className="text-black font-semibold text-sm hidden md:block">
                      {title}
                    </h1>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="inline-flex flex-none flex-shrink-0 items-center justify-center p-2 bg-white rounded-full">
          <Image src="/svgs/message.svg" width={23} height={22} alt="message" />
        </div>
        <a
          href="#"
          className="text-black font-medium text-sm hover:underline transition ease-in-out duration-150 hidden md:block"
        >
          Help Center
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
