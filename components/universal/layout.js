
import NavBar from '../universal/navbar';
import Footer from '../universal/footer';

export default function Layout({ children }) {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}