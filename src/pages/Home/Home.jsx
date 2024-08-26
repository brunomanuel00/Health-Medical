import React from "react"
import Carrousel from "../../components/Carrousel/Carrousel"
import './Home.css';
import Cards from "../../components/Cards/Cards";
import Footer from '../../components/Footer/Footer'
import Button from '@mui/material/Button';
import doctors from '../../assets/Doctors.png'

export default function Home() {
    return (
        <div>
            <Carrousel />
            <div className="home-container-presentation">
                <h1 className='home-title'>
                    Tu bienestar es nuestra prioridad
                </h1>
                <Button className="home-contact-button" variant="contained">
                    Contáctanos
                </Button>
            </div>
            <Cards />
            <div className="home-content-subcards">
                <h3 className='home-card-subtitle'>
                    Explora todos nuestros servicios
                </h3>
                <Button className="home-subcards-button" variant="contained">
                    Ver más
                </Button>
            </div>
            <div className="home-content-subcards">
                <img src={doctors} height={'215px'} width={'324px'} alt=" doctors" />
            </div>
            <div className="home-content-subcards">
                <h3 className="home-content-h3">
                    Servicios DOT
                </h3>
                <p className="home-content-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                <Button className="home-subcards-button" variant="contained">
                    Ver más
                </Button>
            </div>
            <Footer />
        </div>
    )

}
