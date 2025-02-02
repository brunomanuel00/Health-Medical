import React from "react"
import BackgroundTop from "../../components/BackgroundTop/BackgroundTop"
import contact from '../../assets/contact-us.jpg'
import CustomBreadCrumbs from "../../components/BreadCrumbs/CustomBreadCrumbs"
import DescriptionContainer from "../../components/Description/DescriptionContainer"
import CardContactUs from "./components/CardContactUs"
import './ContactUs.css'
import { contactUS } from "../../utils/content"

export default function ContactUs() {
    return (
        <>
            <BackgroundTop photo={contact} text={'Contáctanos'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <div className="container-intro">
                    <h3>Póngase en contacto con uno de nuestros expertos en atención médica utilizando las opciones de contacto que aparecen a continuación.</h3>
                </div>
                <div className="container-cardUS">
                    <CardContactUs src={contactUS.x.src} alt={contactUS.x.alt} title={contactUS.x.title} text={contactUS.x.text} email={contactUS.x.address} mailview={contactUS.x.mailview} />
                    <CardContactUs src={contactUS.assistent.src} alt={contactUS.assistent.alt} title={contactUS.assistent.title} text={contactUS.assistent.text} email={contactUS.assistent.address} mailview={contactUS.assistent.mailview} />
                    <CardContactUs src={contactUS.mail.src} alt={contactUS.mail.alt} title={contactUS.mail.title} text={contactUS.mail.text} email={contactUS.mail.address} mailview={contactUS.mail.mailview} />
                </div>
            </DescriptionContainer>
        </>
    )
}