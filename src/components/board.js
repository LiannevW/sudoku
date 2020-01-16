import React from 'react';
import Part from './part';
import Square from './square';
import '../App.css';
import LevelEasy from '../levels/easy';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
            ]
        }
        this.level = new LevelEasy();
        this.lives = 3;
    }

    startGame() {
        let updatedSquares = this.state.squares.slice();
        updatedSquares = this.level.initialGame;
        this.setState({squares: updatedSquares})
    }

    checkHasWon() {
        const answer  = this.state.squares;
        const solution =  this.level.solutionGame;

        if (JSON.stringify(answer) === JSON.stringify(solution)) {
            window.alert("YOU WON!!!")
        }
    }

    gameOver() {
        window.alert("game over!!!")
    }

    checkHasLost() {
        this.lives = this.lives - 1;
        if (this.lives > 0) {
            return;
        } else {
            this.gameOver()
        }
    };

    handleInput(partNumber, squareNumber, event) {
        const squareAnswer = parseInt(event.target.value);
        const squareSolution = this.level.solutionGame[partNumber][squareNumber]
        const updatedSquares = this.state.squares.slice();

        if (squareAnswer === squareSolution) {
            updatedSquares[partNumber][squareNumber] = squareAnswer;
            this.setState({squares: updatedSquares});
            this.checkHasWon();
        } else {
            this.checkHasLost();
        }
    }

    renderPart(partNumber) {
        return (
            <Part
                onChange={(squareNumber, e) => this.handleInput(partNumber, squareNumber, e)}
                squares={this.state.squares[partNumber]}
            />
        )
    }

    render() {
        return(
            <div>
                <div className="board">
                    <div className="board-row">
                    {this.renderPart(0)}
                    {this.renderPart(1)}
                    {this.renderPart(2)}
                    </div>
                    <div className="board-row">
                    {this.renderPart(3)}
                    {this.renderPart(4)}
                    {this.renderPart(5)}
                    </div>
                    <div className="board-row">
                    {this.renderPart(6)}
                    {this.renderPart(7)}
                    {this.renderPart(8)}
                    </div>
            </div>
            <button
                onClick={() => this.startGame()}>
                Start easy game
            </button>
        </div>
        )
    }
}

export default Board;
