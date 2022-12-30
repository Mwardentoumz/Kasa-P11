import React from "react";
import { useState } from "react";
import './host.css'

function Host(props) {

    console.log(props)


    return (
        <div className="location-host">
            <div>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
            </div>
            <div className="host-name-picture">
                <div className="host">{props.nom.name}</div>
                <img className="host-picture" src={props.nom.picture}></img>
            </div>
        </div>
    )
}

export default Host;