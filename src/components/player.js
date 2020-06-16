import React from 'react'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissor from '../assets/scissor.png'
import '../indek.css'

function Player({weapon}) {
    return (
        <div className="Player">
            <img className="Player-image"
                src={weapon === "rock" ? rock : weapon === "scissor" ? scissor : paper}
                alt="rock paper scissor" />
        </div>
    )
}

export default Player;