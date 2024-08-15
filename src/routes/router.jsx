import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import OurCompany from "../pages/OurCompany/OurCompany";

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
}, {
    path: '/ourcompany',
    element: <OurCompany />
}
])

export default router;
