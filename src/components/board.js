import React from 'react';
import Square from './square';
import '../App.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleInput(value, i) {
        const squares = this.state.squares.slice();
        squares[i] = value;
        this.setState({squares: squares});
        console.log('what is current state?', this.state)
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
            onChange = {(v) => this.handleInput(v, i)}
            />
        )
    }

    render() {
        return(
            <div className="board">
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
          </div>
        )
    }
}

export default Board;
