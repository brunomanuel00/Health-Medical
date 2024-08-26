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
                <CARD photoURL={curita} title={'Curita'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={medicamento} title={'medicamento'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={cardiograma} title={'cardiograma'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                <CARD photoURL={botiquin} title={'botiquin'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
            </div>
        </>
    )
}