import React,{useState} from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules'
import {FooterContainer} from './Common'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function GamePlay() {
  const[selectedNUmber,setSelectedNumber]=useState()
  const[current,setCurrent]=useState(1)
  const[score,setScore]=useState(0 )
  const[error,setError]=useState('')
  const[showRules,setShowRules]=useState(false)

  Rules
  const generateRandomNumber = (min,max)=>{
      
    return Math.floor(Math.random()*(max-min)+min)
    
        }

  const rollDice =()=>{
    if(!selectedNUmber){
      setError('Number not Selected')
      return
    }
    setError('')
    const randomNumber =generateRandomNumber(1,7)
    setCurrent(pre=>randomNumber)
    

    if(selectedNUmber===randomNumber){
      toast.success(' 😊 WOW Matched')
      setScore(pre=>pre+randomNumber)
    }else{
      toast.warn('!OOPS Not Matched')
      setScore(pre=>pre-1)
      
    }
    setSelectedNumber(undefined)
}



  return (
    
   <MainContainer>
      <ToastContainer
      autoClose={600}
      />
    <div className="top-section">
      {/* {current} and selected ={selectedNUmber} */}

    <TotalScore score={score}/>
    <NumberSelector
    setError={setError}
    error={error}
    selectedNUmber={selectedNUmber}
    setSelectedNumber={setSelectedNumber}

    />
    </div>
<RollDice
current={current}
rollDice={rollDice}
/>

<div className="btns">
  <Button onClick={()=>setScore(0)}>Reset</Button>
  <Button onClick={()=>setShowRules(pre=>!pre)}>Rules</Button>
</div>
{
  showRules &&<Rules/>
}

<FooterContainer>
    <div className="footercontent">
     <h4> NO CopyRight ! Created By MD ATIQUR RAHMAN  </h4>
    </div>
</FooterContainer>

   
   </MainContainer>


    
  )
}

export default GamePlay


const MainContainer =styled.div`
padding-top: 20px;
.top-section{
  display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
}
.btns{
  margin-top:40px;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:15px
 
}

@media  (max-width: 480px) {
  /* background-color: red; */
  max-width: 99vw;
  
}

`;


const Button =styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px 5px;

min-width: 220px;
height: 40px;
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