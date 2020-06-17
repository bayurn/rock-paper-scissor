import React, { Component } from 'react'
import Player from './player'
import '../home.css'
import App from '../App'

const weapons = ["rock", "paper", "scissor"];

class Home extends Component {

    state = {
        playerOne: weapons[0],
        playerTwo: weapons[0],
        winner: "",
        playerOneCounter: 0,
        playerTwoCounter: 0
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
        const { playerOne, playerTwo, playerOneCounter, playerTwoCounter } = this.state;
        this.finishGame();

        if (playerOne === playerTwo) {
        } else if (
            (playerOne === "rock" && playerTwo === "scissor") ||
            (playerOne === "scissor" && playerTwo === "paper") ||
            (playerOne === "paper" && playerTwo === "rock")) {

            return this.setState({
                playerOneCounter: playerOneCounter + 1
            })

        } else {
            return this.setState({
                playerTwoCounter: playerTwoCounter + 1
            })
        }
    }

    selectWeapon = weapon => {
        this.setState({
            playerOne: weapon,
            winner: ""
        })
    }

    finishGame = () => {
        const { playerOneCounter, playerTwoCounter } = this.state;
        if (playerOneCounter >= 3 || playerTwoCounter >= 3) {
            return this.setState({
                playerOneCounter: 0,
                playerTwoCounter: 0,
                isFinish: true
            })
        }
    }

    render() {

        const { playerOne, playerTwo, winner, playerOneCounter, playerTwoCounter, isFinish } = this.state;

        return (
            <>
                <h1>Rock Paper Scisscor</h1>
                <div className="score-board">
                    <div id="p1" className="badge">PLAYER ONE</div>
                    <div id="p2" className="badge">PLAYER TWO</div>
                    <span id="p1-score">{playerOneCounter}</span>
                    <span>:</span>
                    <span id="p2-score">{playerTwoCounter}</span>
                </div>
                <div className="finish">
                    {isFinish === true ? <p>The game is Finish</p> : ''}
                </div>
                <div className="WeaponPlayer">
                    <Player weapon={playerOne} />
                    <Player weapon={playerTwo} />
                </div>
                <div>
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('rock')}>rock</button>
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('paper')}>paper</button>
                    <button className="WeaponBtn" onClick={() => this.selectWeapon('scissor')}>scissor</button>
                </div>
                {/* <div className="Winner">{winner ? this.selectWinner() : null}</div> */}
                <button type="button" onClick={this.startGame}>Start</button>
            </>
        )
    }
}

export default Home;