import React from 'react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

const defaultLayout: React.FC = ({ children }) => {
  return (
    <div className="relative antialiased min-h-screen bg-white overflow-x-hidden">
      {/* <div className="absolute w-[355px] h-[355px] lg:scale-75 top-16 left-[29px] bg-[#9872FF] opacity-10 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[534px] h-[244px] lg:scale-75 bottom-0 left-[80px] bg-[#5D9CE6] opacity-40 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[495px] h-[495px] lg:scale-75 right-0 bg-[#3A09BC] opacity-20 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute w-[516px] h-[341px] lg:scale-75 bottom-0 right-0 bg-[#FE5C31] opacity-20 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="flex justify-center">
        <div className="absolute w-[874px] h-[874px] flex items-center justify-center bg-[#9F7FE8] opacity-30 rounded-full mix-blend-multiply blur-3xl"></div>
      </div> */}
      <main className="flex bg-white/70 backdrop-blur-md">
        <Sidebar />
        <section className="container mx-auto flex-1 h-full w-full">
          <Header />
          {children}
        </section>
      </main>
    </div>
  )
}

export default defaultLayout
