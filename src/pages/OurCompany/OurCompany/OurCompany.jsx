import BackgroundTop from "../../../components/BackgroundTop/BackgroundTop"
import tetoscopio from '../../../assets/ourcompany.webp'
import CustomBreadCrumbs from "../../../components/BreadCrumbs/CustomBreadCrumbs"
import DescriptionBlock from "../../../components/DescriptionBlock/DescriptionBlock"
import DescriptionContainer from "../../../components/Description/DescriptionContainer"
import { content } from "../../../utils/content"


export default function OurCompany() {
    return (
        <>
            <BackgroundTop photo={tetoscopio} text={'Nuestra Compañía'} />
            <CustomBreadCrumbs />
            <DescriptionContainer>
                <DescriptionBlock title={'Moyal Medical'} text={content} />
                <DescriptionBlock title={'Nuestra Misión'} text={content} />
                <DescriptionBlock title={'Por qué nosotros'} text={content} />
            </DescriptionContainer>
        </>
    )

};
