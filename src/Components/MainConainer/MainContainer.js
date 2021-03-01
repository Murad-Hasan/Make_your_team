import React, { useEffect, useState } from 'react';
import AllPlayers from '../AllPlayers/AllPlayers'

const MainContainer = (props) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('https://api.mocki.io/v1/53e7a645')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className='mt-3 ml-4 '>
                {
                    players.map(player => <AllPlayers HandelAddPlayer={props.HandelAddPlayer}  player={player} key={player.id}></AllPlayers>)
                }

        </div>
    );
};

export default MainContainer;