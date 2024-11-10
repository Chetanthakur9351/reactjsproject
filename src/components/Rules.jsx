import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
    <div className="text">
    
    <p>Select any number</p>
    <p>Click on dice images</p>
    <p>After click on Dice if selected number is equal to dice number you will get same point as dice {""}</p>
    <p>If you get wrong guess then 2 point will deducted</p>
    </div>

    Rules
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
margin: 0px auto;
max-width: 800px;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;

h2{
    font-size: 24px;
    
}
.text{
    margin-top: 24px;

}

`;
