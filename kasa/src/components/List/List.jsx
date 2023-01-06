import { useState } from 'react';
import { useEffect } from 'react';
import './List.css'
import Location from "./Location/Location.jsx";



function LocationList() {

    const [venues, setVenues] = useState([])

    useEffect(()=> {
        fetch('/locations.json')
            .then((Response) => {
                return Response.json()
            })
            .then((data) => {
                setVenues(data)
            })
    })

    return (
        <div className='kasa-venue-list-bgd'>
            <div className='kasa-venue-list'>
                {venues.map((venue) =>

                    <div className='card-container' key={venue.id}>
                        <Location
                            id={venue.id}
                            cover={venue.cover}
                            title={venue.title}
                        />

                        
                    </div>)}
            </div>
        </div>
    )
}

export default LocationList