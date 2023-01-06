import './Footer.css'
import Footerlogo from '../../assets/Footerlogo.svg'

function Footer(){
    return (
        <div className="Footer-wrapper">
            <img className='footerlogo' src={Footerlogo} alt='logo'></img>
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer