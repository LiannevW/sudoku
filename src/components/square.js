import React from 'react';

function Square(props) {

    return(
        <input
            className="square"
            type="text"
            pattern="[0-9]"
            onChange={(e) => props.onChange(e.target.value)}
        />
    )

}

export default Square;
