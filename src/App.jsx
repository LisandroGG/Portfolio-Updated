import style from '../src/App.module.css'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'

function App() {

  return (
    <>
      <Nav />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
