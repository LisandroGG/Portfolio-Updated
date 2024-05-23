import style from '../Projects/Projects.module.css'
import { useTheme } from '../../Context/Theme';

const Projects = () => {
    
    const { isDarkMode, toggleTheme } = useTheme();

    return(
        <div id="projects" className={style.project}>Projects</div>
    )
}

export default Projects