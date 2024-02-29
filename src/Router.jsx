import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Cart from './Cart'
import ErrorElement from './ErrorElement'

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <App />,
                children: [
                    {
                        path: 'cart',
                        element: <Cart />
                    }
                ],
                errorElement: <ErrorElement />
            },
        ]
    )
    
    return <RouterProvider router={router}/>
}

export default Router
