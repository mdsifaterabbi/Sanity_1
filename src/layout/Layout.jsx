import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { HelmetProvider, Helmet } from "react-helmet-async";

const Layout = ({ children,title }) => {

    const myBg = {
        backgroundColor: '',
    }


    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>


            <Navbar />
            
            <main style={myBg}>
                {  children }
            </main>

           
            <Footer />
            
            
        </>
    )
}

export default Layout