import React from 'react'
import styled from 'styled-components'
import {FooterContainer} from './Common'
function StartGame({toggle}) {
  return (
    <>
    <Container>
<div>
<img src="/images/dice.png" alt="" />
</div>
<div className='content'>
    <h1>Dice Game</h1>
<Button  onClick={toggle}>Play Now</Button>
</div>

    </Container>
    <FooterContainer>
    <div className="footercontent">
     <h4> NO CopyRight ! Created By MD ATIQUR RAHMAN  </h4>
    </div>
</FooterContainer>
    </>
  )
}

export default StartGame



const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 80vh;
align-items: center;

.content{
   h1{
    font-size: 80px;
    white-space: nowrap;
   }
}
@media (max-width: 480px) {
 
  height: 90vh;
   max-width: 95vw;
   flex-direction: column;
   gap: 3rem;
   img{
    /* border: 1px solid red; */
    max-width: 90vw;
    margin-top: 20vh;

   }
   .content{

    max-width: 90vw;
    h1{
      font-size: 50px;
    }
   }
  }

`;

// const FooterContainer=styled.div`

// background-color: black;
// /* border: 1px solid red; */
// height: 10vh;
// margin-top: -5vh;
// margin-bottom: 1vh;
// display: grid;
// place-items: center;
// .footercontent{
//   color: white;
//   white-space: nowrap;
//   font-size: 90%;
//   width: 95vw;
//   text-align: center;
  
// }

// @media (max-width:480px){
//   position: fixed;
//   bottom: 1%;
//   z-index: -2;
//   max-width: 99vw;
//   .footercontent{
//     width: 99vw;
//   }
// }
// `;

const Button =styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;

min-width: 220px;
height: 44px;
border: none;
font-size: 16px;

color: wheat;
background-color: #000000;
border-radius: 5px;
cursor: pointer;
transition: 0.4s ease-in;


&:hover{
   background-color: white;
   border: 1px solid black;
   color: black;
   transition: 0.3s ease-in;
   font-weight: bold;
}

`;
