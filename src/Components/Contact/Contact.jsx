import style from '../Contact/Contact.module.css'
import { useTheme } from '../../Context/Theme';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
        position: "top",
        title: "Mensaje enviado",
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 1300,
        customClass: {
            popup: style.popu,
            title: style.title,
        },
        showClass: {
            popup: 'animate__animated animate__zoomIn',
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut',
        }
    })
    emailjs
        .sendForm('service_7gbt22s', 'template_aiyse4w', form.current, {
        publicKey: 'FyzzoJKpmfyOJ4A1c',
        })
        .then(
        () => {
            form.current.reset()
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };

    const { isDarkMode } = useTheme();

    const currentColor = isDarkMode ? "white" : "black";

    return(
        <div className={style.contact} id="contact" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="50">

            <div className={style.media}>
                <span>Contactame</span>
                <div className={style.options}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill={currentColor} fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg> 
                    <h3>WhatsApp</h3>
                </div>
                <a href="https://api.whatsapp.com/send?phone=3472620188&text=Hola%20Lisandro!" target='_blank' className={style.btns}><h4>Enviar al WhatsApp</h4></a>

                <div className={style.options}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill={currentColor} fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    <h3>Github</h3>
                </div>
                <a href="https://github.com/LisandroGG" target='_blank' className={style.btns}><h4>Visualizar Perfil</h4></a>

                <div className={style.options}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill={currentColor} d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                    <h3>Mail</h3>
                </div>
                <a href="mailto:lisandro.pereyra123456@gmail.com" target='_blank' className={style.btns}><h4>Enviar un correo</h4></a>

                <div className={style.options}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill={currentColor} d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                    <h3>Linkedin</h3>
                </div>
                <a href="https://www.linkedin.com/in/lisandro-pereyra-18503626a/" target='_blank' className={style.btns}><h4>Visualizar Perfil</h4></a>

                <div className={style.options}>
                    <a href='https://docs.google.com/document/d/1oz1mp9AqcTbX_tCzTXtXtG0f018a8PuE/edit?usp=sharing&ouid=114444473455443716196&rtpof=true&sd=true' target='_blank' className={style.cv}>Descargar CV</a>
                </div>

            </div>

            <div className={style.formulario}>
            <form ref={form} onSubmit={sendEmail} className={style.form} >

                <label htmlFor="sendMe" className={style.send}>Enviame un mensaje </label>
                <input type="text" name="user_name" placeholder='Nombre' autoComplete='off' required></input>

                <input type="email" name="user_email" placeholder='Email' autoComplete='off' required></input>

                <textarea name="message" cols="50" rows="10" placeholder='Mensaje' autoComplete='off' required></textarea>

                <button type="submit" className={style.btn} value="send">Enviar</button>

                <input type="hidden" name="_next" value="http://localhost:5173"></input>
                <input type="hidden" name="_captcha" value="false"></input>
            </form>
            </div>
        </div>
    )
}

export default Contact