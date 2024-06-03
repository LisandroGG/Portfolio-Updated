import style from '../About/About.module.css';
import { useTheme } from '../../Context/Theme';
import lisandro from '/img/foto.png';
import lisandro2 from '/img/foto2.png';
import { useState, useRef, useEffect} from 'react';
import tecnologias from '../../Data/tecnologias.json'

const About = () => {
    
    const { isDarkMode, toggleTheme } = useTheme();

    const [openAbout, setOpenAbout] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openGoals, setOpenGoals] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpenAbout(false);
                setOpenSkills(false);
                setOpenGoals(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

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
                    <img src={currentImg} alt='Mi foto' data-aos="zoom-in" data-aos-delay="100"></img>
                    <div className={style.info} >
                        <div className={style.dropdown} onClick={handleOpenAbout} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="75">
                            <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -4 26 26"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.493 6a1.494 1.494 0 1 1-.001 2.987A1.494 1.494 0 0 1 15.493 8zM8.5 8a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 8zM12 18c-5 0-6-5-6-5h12s-1 5-6 5z"></path></svg>¿Quien soy?</h1>
                            {
                                openAbout && <div className={style.content}>
                                    <span>Lisandro, un Desarrollador Fullstack, graduado en henry donde he tenido una formación intensiva de 800 horas teórico y prácticas, he podido realizar proyectos reales y vivenciado ambos lados del desarrollo, tanto el Back como el Front aunque disfruto mucho del Frontend.</span>
                                </div>
                            }
                        </div>
                        <div className={style.dropdown} onClick={handleOpenSkills} data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine"data-aos-delay="175">
                            <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -3 24 24"><path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2z"></path></svg>Mis habilidades</h1>
                            {
                                openSkills && <div className={style.content}>
                                    <span>Desde pequeño he tenido mucha facilidad e interés por todos los ámbitos que me permitieran explorar mi creatividad, la tecnología me ha permitido utilizar mi creatividad al 100%</span>
                                </div>
                            }
                        </div>
                        <div className={style.dropdown} onClick={handleOpenGoals} data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-delay="275">
                            <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -4 26 26"><path d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"></path></svg>¿Que estoy buscando?</h1>
                            {
                                openGoals && <div className={style.content}>
                                    <span>Hoy además de trabajar como freelancer, busco incorporarme a un equipo donde pudiera crecer profesionalmente poniendo a disposición todos mis recursos.</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className={style.section2}>
                    <div className={style.title} data-aos="zoom-in" data-aos-delay="300">
                        <h1>Mis tecnologias</h1>
                    
                    <div className={style.tech}>
                        {tecnologias.map((tecnologia, index) => (
                            <img key={index} src={tecnologia.imagen} alt={tecnologia.nombre} data-aos="zoom-in"  data-aos-delay={100 + index * 100}></img>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About