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
        path: 'ourcompany',
        element: <OurCompany />
    }]
},
])

export default router;
