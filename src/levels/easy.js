import React from 'react'

class LevelEasy extends React.Component {
    constructor(props) {
        super(props);

        this.initialGame = [
            [null, 7, null, 1, 2, 6, null, null, 3],
            [1, null, null, 3, null, null, null, 7, 2],
            [null, null, null, null, null, 7, null, 6, null],
            [null, null, null, null, 5, null, 8, null, null],
            [null, null, 7, 8, 3, null, null, null, 1],
            [null, 2, null, 1, null, null, 3, 7, 4],
            [7, null, null, null, null, 5, 4, null, 8],
            [null, 9, 5, null, null, null, 6, 2, null],
            [6, null, 3, 2, null, null, null, null, 5]
        ];

        this.solutionGame = [
            [5, 7, 4, 1, 2, 6, 9, 8, 3],
            [1, 8, 6, 3, 4, 9, 5, 7, 2],
            [9, 3, 2, 8, 5, 7, 4, 6, 1],
            [3, 4, 1, 2, 5, 7, 8, 6, 9],
            [9, 6, 7, 8, 3, 4, 2, 5, 1],
            [5, 2, 8, 1, 9, 6, 3, 7, 4],
            [7, 1, 2, 6, 3, 5, 4, 9, 8],
            [4, 9, 5, 7, 1, 8, 6, 2, 3],
            [6, 8, 3, 2, 4, 9, 7, 1, 5]
        ]
    }
}

export default LevelEasy;
