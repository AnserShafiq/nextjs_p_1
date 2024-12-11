import Layout from '@/components/postLayout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { getSortedPostsData } from '../../lib/posts';
import utilStyles from './styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  let externalData = [];

  try {
    const res = await fetch('https://api.nationalize.io?name=nathaniel');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    externalData = await res.json();
    console.log(externalData)
  } catch (error) {
    console.error('Error fetching external data:', error);
  }

  return {
    props: {
      allPostsData,
      externalData,
    },
  };
}

export default function Home({ allPostsData, externalData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>Next JS - Project By Anser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-[4rem] font-extrabold">HELLO WORLD</h3>
        <Link href={'/posts/firstpost'}>My First Post</Link>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>External API Data</h2>
        <ul>
        {
          externalData.country.map((data, index) => (
            <li key={index}>
              <div className='flex justify-between'>
                <h3>Country ID: {data.country_id}</h3>
                <h3>Probability: {data.probability}</h3>
              </div>
            </li>
          ))
        }
        </ul>
        
      </section>
    </Layout>
  );
}
