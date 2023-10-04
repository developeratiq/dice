import React, { useState } from 'react'
import styled from 'styled-components'
function NumberSelector({selectedNUmber,setSelectedNumber,error,setError}) {

   
    const array=[1,2,3,4,5,6]
    // console.log(selectedNUmber)
const NumberSelectorHandler=(value)=>{
setSelectedNumber(value)
setError('')
}


  return (
    <SelectedNumber>
      <p className='error'>{error}</p>
      <div className='flex'>

    {
      array.map((value,i)=>(
        <Box key={i}
        isSelected={
          value===selectedNUmber
        }
        onClick={()=>NumberSelectorHandler(value)}
        
        >{value}</Box>
        ))
      }
      </div>
    
    
      <p>selected Number {selectedNUmber}</p>
    </SelectedNumber>
  )
}

export default NumberSelector


const SelectedNumber =styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 20px;
}
p{
  font-size:24px ;
  text-transform: capitalize;
}

.error{
  color: red;
}
@media  (max-width: 480px) {
  font-size: 50%;
  .flex{
    gap: 5px;
  }
  .error{
    font-size: 130%;
    margin-bottom: 5px  ;
  }
  p{
    font-size: 130%;
    margin-top: 7px;
    margin-right: 20px  ;
  }
  
}

`;

const Box =styled.div`
 height: 72px;
 width: 72px;
 border: 1px solid black;
 display: grid;
 place-items: center;
 font-size: 24px;
 font-weight: 800;
 border-radius: 0%.3rem;
 background-color: ${(props)=>props.isSelected?"black":"white"};
color: ${(props)=>props.isSelected?"white":"black"};

@media  (max-width: 480px) {
  font-size: 80%;
  width: 36px;
  height: 36px;

  
}
 
`;