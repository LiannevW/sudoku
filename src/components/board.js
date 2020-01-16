import React from 'react';
import Part from './part';
import '../App.css';
import LevelMedium from '../levels/medium';
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
            ],
            lives: 3
        }
        this.level = [];
    }

    startGame(level) {
        switch (level) {
            case 'easy':
                this.level = new LevelEasy();
                break;
            case 'medium':
                this.level = new LevelMedium();
                break;
        };

        let updatedSquares = this.state.squares.slice();
        updatedSquares = this.level.initialGame;
        this.setState({squares: updatedSquares});
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
        if (this.state.lives > 1) {
            const updatedLives = this.state.lives - 1;
            this.setState({lives: updatedLives});
            return;
        } else {
            this.setState({lives: 0});
            this.gameOver();
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
            <div className="game">
                <div className="game-intro">
                    <h3>Sudoku!</h3>
                    <button
                        onClick={() => this.startGame('easy')}>
                        Start makkelijk spel
                    </button>
                    <button
                        onClick={() => this.startGame('medium')}>
                        Start moeilijk spel
                    </button>
                </div>
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
                <div>
                    Levens = {this.state.lives}
                </div>
            </div>
        )
    }
}

export default Board;
