import './Footer.css'
import { Link } from 'react-router-dom';
import LangFooter from './utils/LangFooter';
import { useState } from 'react';
import logo from '../../assets/company.webp'

export default function Footer() {

    const [lang, setLang] = useState('ES');
    return (
        <div className='footer-container' >
            <ul className='footer-container-ul'>
                <li>
                    <Link to='/'>
                        <img src={logo} alt="MoyaMedical" height={35} width={200} />
                    </Link>
                </li>
                <li>
                    <Link to='/our-company'>
                        Nuestra Compañía
                    </Link>
                </li>
                <li>
                    <Link to='/our-services'>
                        Nuestros Servicios
                    </Link>
                </li>
                <li>
                    <LangFooter lang={lang} setLang={setLang} />
                </li>
                <li>
                    <Link to='/contact-us'>
                        Contáctanos
                    </Link>
                </li>
            </ul>
            <p className='' style={{ textAlign: 'center', color: '#fff', marginTop: '10px', fontSize: '12px' }}>
                © 2024 Moya Medical. Todos los derechos reservados.
            </p>
        </div>
    )

};
