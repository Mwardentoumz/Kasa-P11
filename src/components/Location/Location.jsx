
import './Location.css'

function Location({ id, cover, title }) {

    return (
        <div className="venue-card" key={id}
            style={{
                background: `linear-gradient( rgba(0, 0, 0, 10%), rgba(0, 0, 0, 10%) ), url(${cover})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* <img className="venue-cover" src={cover} alt="logement" /> */}
            <p className='venue-title'>{title}</p>
        </div>
    )
}

export default Location