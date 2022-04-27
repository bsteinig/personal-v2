import type { NextPage } from 'next'
import Nav from '../src/nav'
import Hero from '../src/hero'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <Hero />
    </div>
  )
}

export default Home
