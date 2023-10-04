import styled from 'styled-components'

export const  FooterContainer=styled.div`

background-color: black;
position: absolute;
bottom: 2%;
border: 1px solid red;
height: 7vh;
margin-top: 5vh;
/* margin-bottom: 1vh; */
display: grid;
place-items: center;
.footercontent{
  color: white;
  font-size: 90%;
  width: 100vw;
  text-align: center;
  
}

@media (max-width:480px){
/* margin-top: 5vh; */
} 
`;
