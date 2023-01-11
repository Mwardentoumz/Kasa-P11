import { Link } from "react-browser-router"
import Header from "../../components/Header/Header"

import './NotFound.css'

export default function NotFound() {
    return (
        <div className="container">
            <Header />
            <div className="NotFound">
                <p className="bignumber">404</p>
                <p className="oups">Oups! La page que vous demandez n'existe pas</p>
                <Link className='return' relative='path' to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}