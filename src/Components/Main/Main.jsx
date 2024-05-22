import style from '../Main/Main.module.css'
import { useTheme } from '../../Context/Theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main = () => {

    const { isDarkMode } = useTheme();

    const currentColor = isDarkMode ? "#161b28" : "#ffffff";

    const lin = isDarkMode ? "#00ff00c2" : "#00aaff";
    const git = isDarkMode ? "#00aaff" : "#19e619";

    return(
        <div className={style.main}>
            <div className={style.container}>
                <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">LISANDRO PEREYRA</h1>
                <h2>Full Stack Developer</h2>
                <h3>¡Hola! Soy un <b>desarrollador web</b> especializado en <b>frontend</b>, con una pasión particular por crear experiencias de usuario excepcionales utilizando <b>React.</b></h3>
                <h3 className={style.cel}>¡Hola! Soy un <b>desarrollador web</b> especializado en <b>frontend</b> utilizando <b>React.</b></h3>
            <div className={style.btn}>
                <a href="https://www.linkedin.com/in/lisandro-pereyra-18503626a/" target='_blank'><span className={style.lin}>Linkedin <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -3 20 24"><path fill={lin} d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg></span></a>
                <a href="https://github.com/LisandroGG" target='_blank'><span className={style.git}>Github <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -3 20 24" ><path fill={git} fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></span></a>
            </div>
            </div>
            <div className={style.svg}>
  <svg
    preserveAspectRatio="none"
    viewBox= "0 0 1200 110"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: `${currentColor}`, width: '99.5vw', height: 157, transform: 'rotate(180deg)' }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
</div>
        </div>
    )
}

export default Main