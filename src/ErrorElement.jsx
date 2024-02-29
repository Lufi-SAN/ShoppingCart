import { Link } from "react-router-dom"

const ErrorElement = () => {
    return <>
        <h1>SORRY ERROR HERE</h1>
        <p>You can get back to the <Link to='/'>homepage here</Link></p>
    </>
}

export default ErrorElement