import Layout from '@/components/postLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <Layout home={true}>
    <Head>
        <title>Next JS - Project By Anser</title>
        <link rel='icon' href='/favicon.ico'/>
    </Head>
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <h3 className='text-[4rem] font-extrabold'>HELLO WORLD OF HUTIYAS</h3>
        <Link href={'/posts/firstpost'}>My First Post</Link>
    </div>
    </Layout>
  )
}

export default Home