import React from "react"
import BackgroundTop from "../../../components/BackgroundTop/BackgroundTop"
import CustomBreadCrumbs from "../../../components/BreadCrumbs/CustomBreadCrumbs"
import ubicacion from '../../../assets/Ubicacion.png'
import googlemap from '../../../assets/GoogleMap.png'
import DescriptionContainer from "../../../components/Description/DescriptionContainer"
import location from '../../../assets/location.png'
import phone from '../../../assets/phone.png'
import mail from '../../../assets/mail.png'
import network from '../../../assets/network.png'
import './LocationMap.css'

export default function LocationMap() {
    return (
        <>
            <BackgroundTop photo={ubicacion} text={'Dónde estamos'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <div className="home-dot-container ">
                    <div className="home-content-subcards">
                        <img className="home-content-subcards-img" src={googlemap} height="215px" width="324px" alt="doctors" />
                    </div>
                    <div className="home-content-subcards" >
                        <h3 className="home-content-h3" style={{ color: '#158EE2' }}>Contáctanos</h3>
                        <div style={{ display: "flex", gap: 4, width: 300 }}>
                            <img src={location} width={20} height={20} alt="Location" />
                            <p style={{ color: '#626265' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        </div>
                        <div style={{ display: "flex", gap: 4, width: 300, marginTop: 10 }}>
                            <img src={phone} width={20} height={20} alt="phone" />
                            <span style={{ color: '#626265' }}>(204)-888-6732</span>
                        </div>
                        <div style={{ display: "flex", gap: 4, width: 300, marginTop: 10 }}>
                            <img src={mail} width={20} height={20} alt="phone" />
                            <a href="#" style={{ color: '#158EE2' }}>moyamedical@gmail.com</a>
                        </div>
                        <div style={{ display: "flex", gap: 4, width: 300, marginTop: 10 }}>
                            <img src={network} width={20} height={20} alt="phone" />
                            <a href="#" style={{ color: '#158EE2' }}>www.moyamedical.com</a>
                        </div>
                    </div>
                </div >
            </DescriptionContainer>

        </>
    )
}