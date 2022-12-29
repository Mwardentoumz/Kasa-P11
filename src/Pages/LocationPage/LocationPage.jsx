import React from 'react'
import './LocationPage.css'
import Header from '../../components/header/Header'
import Carrousel from '../../components/Carrousel/Carrousel'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import data from '../../data/locations.json'


function LocationPage() {

    const [venue, setVenue] = useState({ tags: [], equipments: [], pictures: [], ratings: '', host: { 'name': '', 'picture': '' } });

    let { id } = useParams()

    useEffect(function () {
        for (let i = 0; i < data.length; i++)
            if (data[i].id == id) {
                setVenue(data[i])
            }
    })

    
    return (
        <div className='location-page-wrapper'>
            <Header />
            <div className='carrousel-wrapper'>
                <Carrousel
                    slides={venue.pictures} />
            </div>
        </div>
    )
}

export default LocationPage