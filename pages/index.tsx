import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import * as React from 'react'
import Button from '../components/Button';
import HeaderText from '../components/HeaderText/HeaderText'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delz Portofolio</title>
      </Head>
      <div>
        <img src='/chick.png' alt="Opening Picture" className={styles.image} />
        <HeaderText text='DELZ PORTFOLIO' />
        <p>/(^_^)/ This website contains information related to Delian Hendardi \(^_^)\</p>
        <Button text='Who Am I' />
        <Button text='Know-How' />
        <Button text='Experience' />
        <Button text='Contact Me' />
      </div>
    </>
  )
}

export default Home
