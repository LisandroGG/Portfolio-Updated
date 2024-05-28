import style from '../Projects/Projects.module.css'
import { useTheme } from '../../Context/Theme';
import projectos from '../../Data/proyectos.json'

const Projects = () => {
    
    const { isDarkMode, toggleTheme } = useTheme();
    const icons = isDarkMode ? "#00ff00" : "#00aaff";

    return(
        <div id="projects" className={style.project} data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="300">
            <span className={style.title}>Projectos</span>
            <div className={style.container}>
            {projectos.map((projecto, index) => (
                        <div className={style.card}>
                            <img key={index} src={projecto.imagen}></img>
                            <h2>{projecto.nombre}</h2>
                            <h3>{projecto.tipo}</h3>
                            <h4>{projecto.descripcion}</h4>
                            <div className={style.tecnologias}>
                            {projecto.tecnologias.map((tecnologia, techIndex) => (
                            <span key={techIndex}>{tecnologia}</span>
                            ))}
                            </div>
                            <div className={style.btns}>
                            {projecto.demo && <button onClick={() => window.open(projecto.demo, '_blank')}><span>Demo <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 24"><path fill={icons} d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path fill={icons} d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg></span></button>}
                            {projecto.repo && <button onClick={() => window.open(projecto.repo, '_blank')}><span>Repositorio<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 24" ><path fill={icons} fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></span></button>}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Projects