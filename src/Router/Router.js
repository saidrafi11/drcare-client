import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup/Signup";
import Main from "../Components/Main";
import MyReviews from "../Components/MyReviews/MyReviews";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AddService from "../Components/Service/AddService";
import ConfirmOrder from "../Components/Service/ConfirmOrder";
import ServiceDetails from "../Components/Service/ServiceDetails";
import ServicesPage from "../Components/Service/ServicesPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/addservices',
                element: <AddService></AddService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://y-chi-neon.vercel.app/blog')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://y-chi-neon.vercel.app/services/${params.id}`)
            },
            {
                path: '/services/confirm-order/:id',
                element: <ConfirmOrder></ConfirmOrder>,
                loader: ({ params }) => fetch(`https://y-chi-neon.vercel.app/services/${params.id}`)
            }
        ]
    }
])