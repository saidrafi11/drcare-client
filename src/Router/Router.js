import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Components/Main";
import ServiceDetails from "../Components/Service/ServiceDetails";
import ServicesPage from "../Components/Service/ServicesPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<ServicesPage></ServicesPage>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])