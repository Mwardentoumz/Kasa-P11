import React from 'react'
import './LocationPage.css'
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Caroussel/Carrousel'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Host from '../../components/Host/Host'
import Tags from '../../components/Tags/Tags'
import Stars from '../../components/Stars/Stars'
import Collapse from '../../components/Collapse/Collapse'
import Footer from '../../components/Footer/Footer'



function LocationPage() {

    const [venue, setVenue] = useState({ title: '', description: '', location: '', tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } });

    let { id } = useParams()

    useEffect(function () {
        fetch('/locations.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === id) {
                        setVenue(data[i])
                    }
                }
            })
    }, []);
    console.log(venue.tags)
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
            <div className='tags-stars'>
                <div className="main-container-tag">
                    {venue.tags.map((tag) =>

                        <Tags content={tag} key={tag} />
                    )}
                </div>
                <Stars rating={venue.rating} />
            </div>
            <div className='collapses-container'>
                <Collapse title="Description" content={venue.description} />
                <Collapse title="Equipements" content={venue.equipments} />
            </div>
            <Footer/>
        </div>
    )
}

export default LocationPage