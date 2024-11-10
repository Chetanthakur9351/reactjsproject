
import styled from "styled-components";

const Rolldice = ({currentDice, roleDice}) => {
  



  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
    <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
  
}

export default Rolldice;

const DiceContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 48px;
align-items: center;
flex-direction: column;

.dice{

  cursor: pointer;
}
.dice img{
  width: 200px;
  height: auto;
}

p{
  font-size: 20px;
}

`;
