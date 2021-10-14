import logo from "../assets/kartunrambutpendekanimelucugadakbackgroundputih.png";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar navbar-expand bg-dark">
            <div className="container">
                <ul className="nav">
                    <img src={logo} alt="" style={{height: "40px"}} />
                    {/* <li>
                        <Link to="/" className="nav-link">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/manajemen-buku" className="nav-link">manajemen buku</Link>
                    </li>
                     */}
                    <li><Link to="/" className="nav-link">Beranda</Link></li>
                    <li><Link to="/manajemen-buku" className="nav-link">manajemen buku</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;