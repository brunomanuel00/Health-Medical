import React from "react";
import './Cards.css'
import botiquin from '../../assets/botiquin.png'
import curita from '../../assets/curita.png'
import cardiograma from '../../assets/cardiograma.png'
import medicamento from '../../assets/medicamento.png'

import CARD from "./card/Card";

export default function Cards() {
    return (
        <>
            <div className="cards-container">
                <CARD photoURL={curita} title={'Atención de lesiones'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={medicamento} title={'Prebas de drogas y alcohol'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={cardiograma} title={'Exámenes físicos'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={botiquin} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
            </div>
        </>
    )
}