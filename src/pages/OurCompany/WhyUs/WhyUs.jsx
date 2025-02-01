import React from "react"
import heartDoctor from '../../../assets/heart-doctor.png'
import BackgroundTop from "../../../components/BackgroundTop/BackgroundTop"
import CustomBreadCrumbs from "../../../components/BreadCrumbs/CustomBreadCrumbs"
import DescriptionBlock from "../../../components/DescriptionBlock/DescriptionBlock"
import DescriptionContainer from "../../../components/Description/DescriptionContainer"
import { content, loremShort } from '../../../utils/content'
import StarRating from "../../../components/StarRating/StarRating"
import TargetArticle from "../../../components/TargetArticle/TargetArticle"
import testimonio1 from '../../../assets/Testimonio1.png'
import testimonio2 from '../../../assets/Testimonio2.png'
import testimonio3 from '../../../assets/Testimonio3.png'


export default function WhyUs() {
    return (
        <>
            <BackgroundTop photo={heartDoctor} text={'Por qué nosotros'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <DescriptionBlock title={'Por qué nosotros'} text={content} />
                <DescriptionBlock title={'Testimonios'} />
                <TargetArticle name={'Alejandro Cueto'} text={loremShort} img={testimonio1}>
                    <StarRating rating={5} />
                </TargetArticle>
                <TargetArticle name={'Rogelio Santiesteban'} text={loremShort} img={testimonio2} reverseOrder={true}>
                    <StarRating rating={4} />
                </TargetArticle>
                <TargetArticle name={'Pedro Rocket'} text={loremShort} img={testimonio3}>
                    <StarRating rating={5} />
                </TargetArticle>
            </DescriptionContainer>

        </>
    )
}