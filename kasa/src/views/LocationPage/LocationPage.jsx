import React from 'react'
import './LocationPage.css'
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Caroussel/Carrousel'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Host from '../../components/Host/Host'
// import Collapse from '../../components/collapse/collapse'



function LocationPage() {

    const [venue, setVenue] = useState({ title: '', description: '', location: '', tags: [], equipments: [], pictures: [], ratings: '', host: { 'name': '', 'picture': '' } });

    let { id } = useParams()

    useEffect (function (){
        fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i=0; i<data.length; i++){
                if (data[i].id === id){
                    setVenue(data[i])
                }
            }
        })
    },[]);
    
    return (
        <div className='location-page-wrapper'>
            <Header />
            <div className='carrousel-wrapper'>
                <Carrousel
                    slides={venue.pictures} />
            </div>
            <Host 
            title={venue.title}
            location={venue.location}
            nom={venue.host}
            />
            {/* <Collapse title={'Description'}/> */}
        </div>
    )
}

export default LocationPage