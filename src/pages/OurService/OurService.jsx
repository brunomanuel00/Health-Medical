import React from "react"
import DescriptionContainer from "../../components/Description/DescriptionContainer"
import BackgroundTop from "../../components/BackgroundTop/BackgroundTop"
import services from '../../assets/services.webp'
import CustomBreadCrumbs from "../../components/BreadCrumbs/CustomBreadCrumbs"
import CARD from "../../components/Cards/card/Card"
import botiquin from '../../assets/botiquin.webp'
import curita from '../../assets/curita.webp'
import cardiograma from '../../assets/cardiograma.webp'
import medicamento from '../../assets/medicamento.webp'
import tetoscopio from '../../assets/tetoscopio.webp'
import plane from '../../assets/plane.webp'
import people from '../../assets/people.webp'
import balance from '../../assets/balance.webp'
import potion from '../../assets/potion.webp'
import transport from '../../assets/transport.webp'


export default function OurService() {

    return (
        <>
            <BackgroundTop photo={services} text={'Nuestros Servicios'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center', justifyItems: 'center', }}>
                    <CARD photoURL={curita} title={'Atención de lesiones'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={medicamento} title={'Prebas de drogas y alcohol'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={cardiograma} title={'Exámenes físicos'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={botiquin} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={plane} title={'Examen médico de inmigración'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={tetoscopio} title={'Atención rápida'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={people} title={'Programa de asistencia a empleados'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={balance} title={'Cumplimiento normativo'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={potion} title={'Recolección de muestras 24h'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={transport} title={'Servicios DOT'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                </div>
            </DescriptionContainer>

        </>
    )
}