import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>La pagina solicitada no existe</h1>
            <p><Link to={'/home'}>Volver a la pagina de home</Link></p>
        </>
    )
}

export default ErrorPage;