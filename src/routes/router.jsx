import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/OurCompany/Layout";
import OurCompany from "../pages/OurCompany/OurCompany/OurCompany";
import Home from "../pages/Home/Home";
import WhyUs from "../pages/OurCompany/WhyUs/WhyUs";
import LocationMap from "../pages/OurCompany/LocationMap/LocationMap";
import OurService from "../pages/OurService/OurService";
import ContactUs from "../pages/ContactUs/ContactUs";
import { SmoothScrollToTop } from "../utils/ScrollTop"; // Importa el componente que prefieras

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <SmoothScrollToTop />
                <Home />
            </>
        )
    },
    {
        path: '/our-company',
        element: (
            <>
                <SmoothScrollToTop />
                <Layout />
            </>
        ),
        children: [
            {
                path: 'why-us',
                element: <WhyUs />,
            },
            {
                path: 'location-map',
                element: <LocationMap />,
            },
            {
                path: '',
                element: <OurCompany />,
            },
        ]
    },
    {
        path: '/our-services',
        element: (
            <>
                <SmoothScrollToTop />
                <Layout />
            </>
        ),
        children: [
            {
                path: '',
                element: <OurService />,
            },
        ]
    },
    {
        path: '/contact-us',
        element: (
            <>
                <SmoothScrollToTop />
                <Layout />
            </>
        ),
        children: [
            {
                path: '',
                element: <ContactUs />,
            },
        ]
    },
]);

export default router;