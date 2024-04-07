import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError() 

    return ( 
        <>
            <main>
                <h1>SORRY, WE HAVE A { error.statusText || error.message } ERROR HERE</h1>
                <p>You can get back to the <Link to='/'>homepage here</Link></p>
            </main>
        </>
    )
}

export default ErrorElement