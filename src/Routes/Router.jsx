import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout,{ loader as layoutLoader } from './Layout'
import ErrorElement from './ErrorElement'
import HomePage from "./HomePage";
import Cart from "./Cart";
import Page404 from "./Page404";

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                errorElement: <ErrorElement />,
                loader: layoutLoader,
                children: [
                    {
                        index: true,
                        element: <HomePage />
                    },
                    {
                        path: 'cart',
                        element: <Cart />
                    }
                ]
            },
            {
                path: '*',
                element: <Page404 />
            }
        ]
    )
    
    return <RouterProvider router={router}/>
}

export default Router
