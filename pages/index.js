import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ServiceBox } from '../components/serviceBox/ServiceBox'
import { NatureHairSLider } from '../components/natureHaire/NatureHairSlider'
import { BlogSlider } from '../components/blog/BlogSlider';
import { Header } from '../components/header/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Գայանե գեղեցկության սրահ ֊ GEV բնական մազեր</title>
        <meta
          name="description"
          content="GEV բնական մազեր, Գայանե գեղեցկության սրահում"
        />
        <link rel="icon" href="/image.png" />
      </Head>
      {/* main header */}
      <Header />
      <ServiceBox />
      <NatureHairSLider />
      <BlogSlider />
    </>
  ); 
}
