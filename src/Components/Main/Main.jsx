import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import About from '../About/About'
import style from '../Main/Main.module.css'

const Main = () => {

    return(
        <div>
            <About />
            <Projects />
            <Contact></Contact>
        </div>
    )
}

export default Main