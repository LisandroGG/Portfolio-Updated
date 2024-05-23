import style from '../About/About.module.css';
import { useTheme } from '../../Context/Theme';
import lisandro from '/img/foto.png';
import lisandro2 from '/img/foto2.png';
import { useState, useRef, useEffect} from 'react';

const About = () => {
    
    const { isDarkMode, toggleTheme } = useTheme();

    const [openAbout, setOpenAbout] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openGoals, setOpenGoals] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                // Click outside of container, close all dropdowns
                setOpenAbout(false);
                setOpenSkills(false);
                setOpenGoals(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleOutsideClick);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleOpenAbout = () => {
        setOpenAbout(!openAbout);
        setOpenSkills(false);
        setOpenGoals(false);
    };

    const handleOpenSkills = () => {
        setOpenSkills(!openSkills);
        setOpenAbout(false);
        setOpenGoals(false);
    };

    const handleOpenGoals = () => {
        setOpenGoals(!openGoals);
        setOpenAbout(false);
        setOpenSkills(false);
    };

    const currentImg = isDarkMode ? `${lisandro2}` : `${lisandro}`;

    

    return(
        <div id="about" className={style.about}>
            <div className={style.container}>
                <div className={style.section1} ref={containerRef}>
                    <img src={currentImg} alt='Mi foto'></img>
                    <div className={style.info}>
                        <div className={style.dropdown} onClick={handleOpenAbout}>
                            <h1>¿Quien soy?</h1>
                            {
                                openAbout && <div className={style.content}>
                                    <span>Lisandro, un Desarrollador Fullstack, graduado en henry donde he tenido una formación intensiva de 800 horas teórico y prácticas, he podido realizar proyectos reales y vivenciado ambos lados del desarrollo, tanto el Back como el Front aunque disfruto mucho del Frontend.</span>
                                </div>
                            }
                        </div>
                        <div className={style.dropdown} onClick={handleOpenSkills}>
                            <h1>Mis habilidades</h1>
                            {
                                openSkills && <div className={style.content}>
                                    <span>Desde pequeño he tenido mucha facilidad e interés por todos los ámbitos que me permitieran explorar mi creatividad, la tecnología me ha permitido utilizar mi creatividad al 100%</span>
                                </div>
                            }
                        </div>
                        <div className={style.dropdown} onClick={handleOpenGoals}>
                            <h1>¿Que estoy buscando?</h1>
                            {
                                openGoals && <div className={style.content}>
                                    <span>Hoy además de trabajo como freelancer, busco incorporarme a un equipo donde pudiera crecer profesionalmente poniendo a disposición todos mis recursos.</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className={style.section2}>

                </div>
            </div>
            
        </div>
    )
}

export default About