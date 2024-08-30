import './Footer.css'
import { Link } from 'react-router-dom';
import LangFooter from './utils/LangFooter';
import { useState } from 'react';
import logo from '../../assets/company.png'

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
                    <Link to='/ourcompany'>
                        Nuestra Compañía
                    </Link>
                </li>
                <li>
                    <Link>
                        Nuestros Servicios
                    </Link>
                </li>
                <li>
                    <LangFooter lang={lang} setLang={setLang} />
                </li>
                <li>
                    <Link>
                        Contáctanos
                    </Link>
                </li>
                <li>
                    <Link>
                        Portal de pacientes
                    </Link>
                </li>
                <li>
                    © 2024 Moya Medical. Todos los derechos reservados.
                </li>
            </ul>
        </div>
    )

};
