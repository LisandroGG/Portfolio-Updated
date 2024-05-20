import style from '../Nav/Nav.module.css'
import lisandro from '/img/foto.png'
import { useTheme } from '../../Context/Theme';


const Nav = () => {

    const { isDarkMode, toggleTheme } = useTheme();

    return(
        <div className={style.nav}>

            <div className={style.container}>
                <span className={style.img}><img src={lisandro} width='47px' alt='Lisandro foto'></img></span>
                <span className={style.name}>
                    <span style={{fontWeight: '700', fontSize: '18px'}}>Lisandro Pereyra</span>
                    <span style={{fontWeight: '400', fontSize: '13px'}}>Frontend Developer ✨</span>
                </span>
            </div>

            <div className={style.menu}>
                <ul>
                    <li><a href="#">Sobre Mi</a></li>
                    <li className={style.modi}><a href="#">Proyectos</a></li>
                    <li className={style.modi}><a href="#">Contactame</a></li>
                </ul>
            </div>

            <div className={style.containerbtn}>
                <a href='https://docs.google.com/document/d/1oz1mp9AqcTbX_tCzTXtXtG0f018a8PuE/preview'  target='_blank' className={style.cv}>Descargar CV</a>
                <button onClick={toggleTheme} className={style.mode}>
                <span>Modo</span>
                {isDarkMode ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width=".18in" height=".18in" viewBox="0 0 20 20">
                        <g id="moon" transform="translate(3, 0)">
                            <path d="M9,2.9c-2,0-3.8,.8-5.2,2.2,.7-.3,1.4-.5,2.1-.5,3,.1,5.3,2.7,5.2,5.6-.1,2.9-2.4,5.1-5.2,5.2-.7,0-1.5-.2-2.1-.5,2.8,2.9,7.3,2.9,10.1,.2s3-7.3,.3-10.1c-1.4-1.3-3.3-2.2-5.2-2.1h0Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" width=".18in" height=".18in" viewBox="2 0 20 20">
                        <g id="sun" transform="translate(3, 0)">
                            <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="none" stroke="#000000" strokeWidth="1.08" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                    }
                </button>
            </div>
            
        </div>
        
    )
}

export default Nav