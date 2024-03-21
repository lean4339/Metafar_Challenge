import { Container } from "@mui/material";
import { useLocation } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar'
import Home from '../pages/Home'
const Layout = (props: { child: JSX.Element }) => {
    const location = useLocation()
    const { child } = props;
    return (
        <>
        <NavBar/>
        <Container className="container-main">
            {location.pathname === '/'? <Home />: 
            child
            }
        </Container>
        </>
    )
}

export default Layout;