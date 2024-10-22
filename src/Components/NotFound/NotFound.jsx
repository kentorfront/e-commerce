import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function NotFound(){
    return(
        <>
            <Header />
            <div className="notFound" style={{display: 'flex', justifyContent:'center', height:'500px', alignItems:'center', justifyContent:'center'}}>
                Error 404 <br /> Page Not Found
            </div>
            <Footer />
        </>
    )
}