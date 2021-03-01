import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainConainer/MainContainer';
import React from 'react';
import PlayersCard from './Components/PlayersCard/PlayersCard';

function App() {

  const [playerBudget, setplayerBudget] = React.useState ([])
  
  const HandelAddPlayer = (player) => {
    const newplayerBudget = [...playerBudget , player]
    setplayerBudget(newplayerBudget)
  }

  return (
    <div>
      <Header></Header>
      <PlayersCard playerBudget ={playerBudget}></PlayersCard>
      <MainContainer HandelAddPlayer = {HandelAddPlayer} ></MainContainer>
      
    </div>
  );
}

export default App;
