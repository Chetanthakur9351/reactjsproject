import Gameplay from "./components/Gameplay";
import StartGames from "./components/StartGames";
import React, { useState } from 'react';



function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamepaly = () =>{
    setIsGameStarted((prev) => !prev);

  };
  return (
    <>
    {isGameStarted ? <Gameplay/> : <StartGames toggle={toggleGamepaly}/>}
    </>
  );
}

export default App;