import type { NextPage } from 'next'
import Head from 'next/head'
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
        <title>Peace (Pease) Adeniji</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/pa.svg" />
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
