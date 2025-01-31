import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/OurCompany/Layout";
import OurCompany from "../pages/OurCompany/OurCompany/OurCompany";
import Home from "../pages/Home/Home";
import WhyUs from "../pages/OurCompany/WhyUs/WhyUs";

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
                path: '',
                element: <OurCompany />,
            },
        ]
    }
]);

export default router;
