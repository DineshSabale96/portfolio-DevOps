import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Skills, Projects, Experience, Education, Certifications } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Assistant from './components/Assistant'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Certifications /><Contact />
      </main>
      <Footer />
      <Assistant />
    </>
  )
}
