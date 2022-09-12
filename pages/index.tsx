import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Peace Adeniji</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Header />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </div>
  )
}

export default Home
