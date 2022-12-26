import './LocationsList.css'
import Location from '../Location/Location'
import data from '../../data/locations.json'



function LocationList() {
    return (
        <div className='kasa-venue-list-bgd'>
            <div className='kasa-venue-list'>
                {data.map(({ id, title, cover }) =>

                    <div className='card-container' key={id}>
                        <Location
                            cover={cover}
                            title={title}
                        />
                    </div>)}
            </div>
        </div>
    )
}

export default LocationList