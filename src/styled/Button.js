import styled from "styled-components";

export const Button = styled.button`

padding: 10px 18px;
color: white;
min-width: 180px;
gap: 10px;
border-radius: 5px;
background: #000;
font-size: 16px;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;


&:hover{
    background-color: Black;
    color: white;
    border: 1px solid transparent;
    
}
`;