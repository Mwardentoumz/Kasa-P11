import { Link } from 'react-router-dom'
import './Location.css'


function Location(props) {
    return (

        <div className="venue-card" key={props.id}
            style={{
                background: `linear-gradient( rgba(0, 0, 0, 10%), rgba(0, 0, 0, 10%) ), url(${props.cover})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* <img className="venue-cover" src={cover} alt="logement" /> */}
            <Link className='venue-title' relative='path' to={`/LocationPage/${props.id}`}>{props.title}</Link>
        </div>
    )
}

export default Location