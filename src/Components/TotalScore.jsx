import React from 'react'

import styled from 'styled-components'

function TotalScore({score}) {
    return (
        <>

            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score</p>

            </ScoreContainer>
        </>
    )
}

export default TotalScore
const ScoreContainer = styled.div`
max-width: 250px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 100px;
}
    p{
        font: 24px;
    }



    @media (max-width: 480px) {
        /* background-color: red; */
        max-width: 125px;
    }h1{
        font-size: 60px;
    }
`;