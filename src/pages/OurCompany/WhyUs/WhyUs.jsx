import React from "react"
import heartDoctor from '../../../assets/heart-doctor.png'
import BackgroundTop from "../../../components/BackgroundTop/BackgroundTop"
import CustomBreadCrumbs from "../../../components/BreadCrumbs/CustomBreadCrumbs"
import DescriptionBlock from "../../../components/DescriptionBlock/DescriptionBlock"
import DescriptionContainer from "../../../components/Description/DescriptionContainer"
import { content } from '../../../utils/content'

export default function WhyUs() {
    return (
        <>
            <BackgroundTop photo={heartDoctor} text={'Por qué nosotros'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <DescriptionBlock title={'Por qué nosotros'} text={content} />
                <DescriptionBlock title={'Testimonios'} />
                <input type="rate" />
            </DescriptionContainer>

        </>
    )
}