import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faMoneyBillWave,faUsers } from '@fortawesome/free-solid-svg-icons'
import './PlayersCard.css'
const PlayersCard = (props) => {
    const TotalBudgte = props.playerBudget;
    let total = 0;
    for (let i = 0; i < TotalBudgte.length; i++) {
        const player = TotalBudgte[i];
        total = total + player.price;   
    }
    
    return (
        <div className ="player-card mt-2 text-center pt-3" style={{ width: '300px' }}>
             <h2 className = 'mb-4'>Make Your Team</h2>
             <h4><FontAwesomeIcon icon={faCheckCircle} /> selected Player: {TotalBudgte.length}</h4>
             <h5> <FontAwesomeIcon icon={faUsers} /> Selected Player Name:</h5>
             {
                 TotalBudgte.map(({name,price,id}) => <li key={id} className ='list-group-item'>  {name}- {price}$</li>)
             } 
             <h2><FontAwesomeIcon icon={faMoneyBillWave} /> Total Cost: {total}$</h2>
        </div>
    );
};

export default PlayersCard;