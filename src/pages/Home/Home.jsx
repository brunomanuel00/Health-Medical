import React from "react"
import Carrousel from "../../components/Carrousel/Carrousel"

export default function Home() {
    return (
        <div>
            <Carrousel />
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <h1 style={{ color: '#fff', width: '360px', textAlign: 'center', zIndex: 10 }}>Tu bientestar es nuestra prioridad</h1>
            </div>
        </div>
    )

}
