import React from 'react'
import styled from 'styled-components'

function Rules() {
    return (
        <RulesContainer>
            <div className="text">
                <h4>How to play dice game</h4>
                <p>Select any number </p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice
                    if you get wrong guess then  3 point will be dedcuted </p>

            </div>
        </RulesContainer>
    )
}

export default Rules


const RulesContainer = styled.div`
position: absolute;
top: 50%;
left: 20%;
transition:  all 2s linear;
background-color: #FBF1F1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
border-radius: 10px;
.text{
    margin-top: 24px;
}

@media (max-width: 480px){
    top: 30%;
    left: 1%;
}
.text{
    line-height: 20px;
    h4{
        text-align: center;
margin-bottom: 1rem;
    }
    p{
        padding: .2rem;
    }
}
`;
