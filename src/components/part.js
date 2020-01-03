import React from 'react';
import Square from './square';
import '../App.css';

class Part extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSquare(squareNumber) {
        return (
            <Square
                onChange={(e) => this.props.onChange(squareNumber, e)}
                value={this.props.squares[squareNumber]}
            />
        )
    }

    render() {
        return(
            <div className="part">
                <div className="part-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="part-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="part-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
          </div>
        )
    }
}

export default Part;
