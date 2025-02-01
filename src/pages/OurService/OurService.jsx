import React from "react"
import DescriptionContainer from "../../components/Description/DescriptionContainer"
import BackgroundTop from "../../components/BackgroundTop/BackgroundTop"
import services from '../../assets/services.png'
import CustomBreadCrumbs from "../../components/BreadCrumbs/CustomBreadCrumbs"
import CARD from "../../components/Cards/card/Card"
import botiquin from '../../assets/botiquin.png'
import curita from '../../assets/curita.png'
import cardiograma from '../../assets/cardiograma.png'
import medicamento from '../../assets/medicamento.png'
import tetoscopio from '../../assets/tetoscopio.png'
import plane from '../../assets/plane.png'
import people from '../../assets/people.png'
import balance from '../../assets/balance.png'
import potion from '../../assets/potion.png'
import transport from '../../assets/transport.png'


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
                    <CARD photoURL={plane} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={tetoscopio} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={people} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={balance} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={potion} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                    <CARD photoURL={transport} title={'Medicina preventiva'} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</CARD>
                </div>
            </DescriptionContainer>

        </>
    )
}