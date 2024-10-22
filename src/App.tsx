import { useState, Fragment, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import twaLogo from './assets/tapps.png'
// import viteLogo from '/vite.svg'
import './App.css'

// import WebApp from '@twa-dev/sdk'
import { Game } from './models/Game'
import type { CTX } from './types/models.types'

function App() {
  const [game, setGame] = useState<Game>(new Game())
  const ctx = document.getElementById("game") as CTX

  function startGame() {
    const newGame = new Game()
    newGame.play(ctx)
    setGame(newGame)
  }

  useEffect(() => {
    startGame()
  }, [])

  return (
    <>
      <canvas id="game">

      </canvas>
      <div className='bg-blue-500 grid grid-cols-10'>
        {game?.board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => (
              <div className='bg-blue-400 border border-gray-400' style={{ width: cell.size, height: cell.size }}>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default App
