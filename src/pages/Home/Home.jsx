import React from "react"
import Carrousel from "../../components/Carrousel/Carrousel"
import Button from '@mui/material/Button';
import './Home.css';
import Cards from "../../components/Card/Cards";

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
        </div>
    )

}
