import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas,faDollarSign,faBaseballBall,faMale } from '@fortawesome/free-solid-svg-icons'
import './AllPlayers.css'

const AllPlayers = (props) => {
    const { name,image,price,country,role,bio } = props.player;
    const [isClicked, setIsClicked] = useState (false)

    return (
        <div className='float-left m-2'>
            <div className="rounded bg-none card" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faMale} /> Player Name: {name}</Card.Title>
                </Card.Body>
                <p><small>{bio}</small></p>
                <h5><FontAwesomeIcon icon={faGlobeAmericas} /> Country: {country}</h5>
                <h5><FontAwesomeIcon icon={faBaseballBall} />  Role: {role}</h5>
                <h5><FontAwesomeIcon icon={faDollarSign} /> Price: {price}$</h5> 
                <Button disabled ={isClicked}  onClick = {()=> {
                    props.HandelAddPlayer(props.player)
                    setIsClicked(true)
                }} >
                {isClicked ? "✓ Already Hired" : "Hire Now" }
                </Button>
            </div>
        </div>
    );
};

export default AllPlayers;