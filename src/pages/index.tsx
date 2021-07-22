import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import Layout from '~/layouts/defaultLayout'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wigs Ecommerce UI</title>
      </Head>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-4 mr-0 md:mr-10 h-[200vh] md:h-[88vh]">
          <div className="grid gap-4">
            <div className="grid gap-4">
              <ImageContent src="/svgs/content/promo.svg" />
              <ImageContent src="/svgs/content/summer.svg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageContent src="/svgs/content/women1.svg" heart />
              <ImageContent src="/svgs/content/women2.svg" heart />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <ImageContent src="/svgs/content/women3.svg" heart />
              <ImageContent src="/svgs/content/women4.svg" heart />
            </div>
            <div className="grid gap-4">
              <ImageContent src="/svgs/content/women5.svg" />
              <ImageContent src="/svgs/content/women6.svg" />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

const ImageContent: React.FC<{ src: string; heart?: boolean | false }> = ({
  src,
  heart,
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {heart && (
        <button
          className="absolute z-30 top-5 right-6 
        flex items-center justify-between p-2 rounded-full bg-white group 
        hover:bg-red-500 shadow-sm transition ease-in-out duration-150"
        >
          <svg
            className="w-5 h-5 group-hover:text-white transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="#000000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      )}
      <Image
        src={src}
        layout="fill"
        className="w-full h-full object-cover"
        alt="promo"
        blurDataURL="https://onlineimagetools.com/images/examples-onlineimagetools/color-grid.png"
        placeholder="blur"
        quality={100}
      />
    </div>
  )
}

export default Index
