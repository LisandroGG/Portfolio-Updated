import style from '../About/About.module.css'
import { useTheme } from '../../Context/Theme';

const About = () => {
    
    const { isDarkMode, toggleTheme } = useTheme();

    return(
        <div id="about">About</div>
    )
}

export default About