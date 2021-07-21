import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '~/layouts/defaultLayout'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wigs Ecommerce UI</title>
      </Head>
      <Layout>
        <div className="font-bold text-2xl text-purple-600">Hi Gayle</div>
      </Layout>
    </React.Fragment>
  )
}

export default Index
