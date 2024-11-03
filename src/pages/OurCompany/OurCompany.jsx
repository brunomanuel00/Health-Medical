import BackgroundTop from "../../components/BackgroundTop/BackgroundTop"
import tetoscopio from '../../assets/ourcompany.png'
import CustomBreadCrumbs from "../../components/BreadCrumbs/CustomBreadCrumbs"

export default function OurCompany() {
    return (
        <>
            <BackgroundTop photo={tetoscopio} text={'Nuestra Compañía'} />
            <CustomBreadCrumbs />
        </>
    )

};
