import './LocationsList.css'
import Location from '../Location/Location'
import data from '../../data/locations.json'



function LocationList() {
    return (
        <div className='kasa-venue-list-bgd'>
            <div className='kasa-venue-list'>
                {data.map((props) =>

                    <div className='card-container' key={props.id}>
                        <Location
                            id={props.id}
                            cover={props.cover}
                            title={props.title}
                        />
                    </div>)}
            </div>
        </div>
    )
}

export default LocationList