import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import OurCompany from "../pages/OurCompany/OurCompany";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        path: '/',
        element: <Home />
    }, {
        path: '/our-company',
        element: <OurCompany />,
        children: [{
            path: 'moyal-medical',
            element: <OurCompany />,
        }]
    }]
},
])

export default router;
