
import styled from "styled-components"


const Numberselector = ({setError, error, selectedNumber,setSelectedNumber}) => {

  
    const arry = [1,2,3,4,5,6];
    const NumberselectorHandler = (value) =>{
      setSelectedNumber(value)
      setError("");
    }
   
    
  return (
    <NumberselectorContainer>
    <p className="error">{error}</p>
    <div className="flex">
    {
    
        arry.map((value, i)=>(
      
          
            <Box 
            isSelected={value === selectedNumber}
            key={i} onClick={() => NumberselectorHandler(value)}
            >
            {value}</Box>
       

        ))}
        
 
      
    </div>
    <p>Selected Number</p>
    </NumberselectorContainer>

  )
}

export default Numberselector



const NumberselectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 20px;
  font-weight: 700;
}
.error{
  color: red;
}
`;

const Box = styled.div`
height: 60px;
width: 60px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=> (props.isSelected ? "black" : "white")};
color: ${(props)=> (props.isSelected ? "white" : "black")};
`;
