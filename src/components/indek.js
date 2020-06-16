import React, { Component } from 'react'
import Player from './player'
import '../indek.css'

const weapons = ["rock", "paper", "scissor"];

class Indek extends Component {

    state = {
        playerOne: weapons[0],
        playerTwo: weapons[0],
        winner: ""
    }

    startGame = () => {
        let count = 0;
        let gameInterval = setInterval(() => {
            count++;
            this.setState({
                playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
                winner: ""
            })
            if (count > 5) {
                clearInterval(gameInterval);
                this.setState({
                    winner: this.selectWinner()
                })
            }
        }, 100)

    }

    selectWinner = () => {
        const { playerOne, playerTwo } = this.state;

        if (playerOne === playerTwo) {
            return "Tie Dude";
        } else if (
            (playerOne === "rock" && playerTwo === "scissor") ||
            (playerOne === "scissor" && playerTwo === "paper") ||
            (playerOne === "paper" && playerTwo === "rock")) {
            return "Player one Wins";
        } else {
            return "Player two Wins";
        }
    }

    selectWeapon = weapon => {
        this.setState({
            playerOne: weapon,
            winner: ""
        })
    }

    render() {

        const { playerOne, playerTwo, winner } = this.state;

        return (
            <>
                <h1>Rock Paper Scisscor</h1>
                <div>
                    <Player weapon={playerOne} />
                    <Player weapon={playerTwo} />
                </div>
                <div>
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('rock')}>rock</button>
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('paper')}>paper</button>{" "}
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('scissor')}>scissor  </button>
                </div>
                <div className="Winner">{winner ? this.selectWinner() : null}</div>
                <button type="button" onClick={this.startGame}>Start</button>
            </>
        )
    }
}

export default Indek;