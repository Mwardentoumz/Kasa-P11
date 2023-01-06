import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import './Header.css'

function Header() {
    return (
        
        <div className='header'>
            <img className="logo" src={logo} alt='logo application'></img>
            <li className='nav-kasa'>
                <Link className='kasa-links' relative='path' to='/'>Accueil</Link>
                <Link className='kasa-links' relative='path' to='/about'>A Propos</Link>
            </li>

            
        </div>
        


    )
}

export default Header