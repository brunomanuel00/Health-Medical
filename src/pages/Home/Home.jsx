import React from "react"
import Carrousel from "../../components/Carrousel/Carrousel"
import './Home.css';
import Cards from "../../components/Cards/Cards";
import Button from '@mui/material/Button';
import doctors from '../../assets/Doctors.png'
import Navbar from "../../components/NavBar/NavBar";
import { loremShort } from '../../utils/content'
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <Carrousel />
            <div className="home-container-presentation">
                <h1 className='home-title'>
                    Tu bienestar es nuestra prioridad
                </h1>
                <Button className="home-contact-button" variant="contained" onClick={() => navigate('/contact-us')}>
                    Contáctanos
                </Button>
            </div>
            <Cards />
            <div className="home-content-subcards">
                <h3 className='home-card-subtitle'>
                    Explora todos nuestros servicios
                </h3>
                <Button className="home-subcards-button" variant="contained" onClick={() => navigate('/our-services')}>
                    Ver más
                </Button>
            </div>
            <div className='home-dot-container'>
                <div className="home-content-subcards">
                    <img className='home-content-subcards-img' src={doctors} height={'215px'} width={'324px'} alt=" doctors" />
                </div>
                <div className="home-content-subcards">
                    <h3 className="home-content-h3">
                        Servicios DOT
                    </h3>
                    <p className="home-content-text">{loremShort}</p>
                </div>
            </div>
            <div className='home-content-subcards'>
                <Button className="home-subcards-button" variant="contained">
                    Ver más
                </Button>
            </div>
            <Footer />
        </div>
    )

}
