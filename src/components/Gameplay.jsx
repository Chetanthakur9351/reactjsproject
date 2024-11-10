import styled from "styled-components"
import Numberselector from "./Numberselector"
import TotalScore from "./TotalScore"
import Rolldice from "./Rolldice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"


const Gameplay = () => {
  const [score, setScore] =useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const[showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max- min) + min))
    return Math.floor(Math.random() * (max- min) + min);
   }
   const roleDice = () =>{
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number");
      return ;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((perv) => randomNumber);
    

    if(selectedNumber == randomNumber){
      setScore(prev => prev+ randomNumber)}
      else{
        setScore((prev) => prev-2);

      }

      setSelectedNumber(undefined)
    
   }

   const resetScore= () => {
    setScore (0);
   }


  return (
  
  <MainContainer>
  <div className="topsection">
  <TotalScore score={score}/>
  <Numberselector 
  error={error}
  setError = {setError}
  setSelectedNumber ={setSelectedNumber}
  selectedNumber ={selectedNumber}/>
  
  </div>
  <Rolldice currentDice={currentDice}
  roleDice={roleDice}/>
  <div className="btns">
  <OutlineButton onClick={resetScore}>  Reset  </OutlineButton>
  <Button onClick={() =>  setShowRules ((prev) => !prev)}>
  {showRules ? "Hide" : "show" } Rules
  </Button>
  </div>
  {showRules && <Rules/>}
  </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main`
padding-top: 20px;

.topsection{
  display: flex;
  justify-content: space-around;
  align-items: end;

}
.btns{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

}
`;

