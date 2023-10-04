

import { useState } from 'react';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';




function App() {
  const [play, setPlay] = useState(true)

  const toggleGamePlay = () => {
    setPlay(pre => !pre)
  }


  return (
    <>
      {
        play ? <StartGame toggle={toggleGamePlay} /> : <GamePlay />
      }


    </>
  )
}

export default App
