import React from 'react'
import Sidebar from '~/components/Sidebar'

const defaultLayout: React.FC = ({ children }) => {
  return (
    <div className="relative antialiased min-h-screen h-full bg-[#E5E5E5] overflow-hidden">
      <div className="absolute w-[355px] h-[355px] top-16 left-[29px] bg-[#9872FF] opacity-10 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[534px] h-[244px] bottom-0 left-[80px] bg-[#5D9CE6] opacity-40 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[495px] h-[495px] right-0 bg-[#3A09BC] opacity-20 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[516px] h-[341px] bottom-0 right-0 bg-[#FE5C31] opacity-20 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="flex justify-center">
        <div className="absolute w-[874px] h-[874px] flex items-center justify-center bg-[#9F7FE8] opacity-30 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      <main className="flex bg-white/80 backdrop-blur-md">
        <Sidebar />
        <section className="flex-grow">{children}</section>
      </main>
    </div>
  )
}

export default defaultLayout
