import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  
  return (
         <>
         <Head>
          <title>Ninjalist</title>
         </Head>
         <div> 
          <h1 className={styles.title}>HOME PAGE</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta ratione dolore voluptatem quaerat rerum autem assumenda mollitia! Voluptates deleniti saepe provident adipisci deserunt ipsum, ab fugit temporibus nisi facere?</p>
          <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat rerum voluptatum voluptates dolor est magnam dolorem excepturi. Illum nihil adipisci quam, vero tempora soluta eveniet aspernatur reiciendis totam quibusdam.</p>
          <Link href="/Ninjas/"
          className={styles.btn}>See Ninja Listing
          </Link>
         </div>
         </>
    
          
  )
}
