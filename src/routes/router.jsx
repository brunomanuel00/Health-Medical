import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/OurCompany/Layout";
import OurCompany from "../pages/OurCompany/OurCompany/OurCompany";
import Home from "../pages/Home/Home";
import WhyUs from "../pages/OurCompany/WhyUs/WhyUs";
import LocationMap from "../pages/OurCompany/LocationMap/LocationMap";
import OurService from "../pages/OurService/OurService";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/our-company',
        element: <Layout />,
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
        element: <Layout />,
        children: [
            {
                path: '',
                element: <OurService />,
            },
        ]
    }, {
        path: '/contact-us',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <ContactUs />,
            },
        ]
    },
]);

export default router;
