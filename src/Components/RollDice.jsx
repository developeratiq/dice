import React, { useState } from 'react'
import styled from 'styled-components'

function RollDice({current,rollDice}) {

    


   

  return (
    <RollContainer>
<div className="rollcontainer"
onClick={rollDice}
>
<img src={`/images/dice_${current}.png`} alt="" />
</div>
<p>Click on Dice to Roll</p>

    </RollContainer>
  )
}

export default RollDice


const RollContainer = styled.div`
margin-top: 48px;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;    

 p{

 }
`;