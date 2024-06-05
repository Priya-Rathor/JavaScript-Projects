document.addEventListener("DOMContentLoaded", function() {
    const boardElement = document.getElementById("sudoku-board");
    const solveButton = document.getElementById("solve-button");
    const clearButton = document.getElementById("clear-button");
    const checkButton = document.getElementById("check-button");

    const board = [];
    for (let i = 0; i < 9; i++) {
        board[i] = [];
        for (let j = 0; j < 9; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.classList.add(`row-${i + 1}`, `col-${j + 1}`);
            boardElement.appendChild(input);
            board[i][j] = input;
        }
    }

    const predefinedPuzzles = [
        [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ],
        [
            [0, 0, 0, 6, 0, 0, 4, 0, 0],
            [7, 0, 0, 0, 0, 3, 6, 0, 0],
            [0, 0, 0, 0, 9, 1, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 1, 8, 0, 0, 0, 3],
            [0, 0, 0, 3, 0, 6, 0, 4, 5],
            [0, 4, 0, 2, 0, 0, 0, 6, 0],
            [9, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 1, 0, 0]
        ],
        [
            [8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 6, 0, 0, 0, 0, 0],
            [0, 7, 0, 0, 9, 0, 2, 0, 0],
            [0, 5, 0, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 0, 4, 5, 7, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 3, 0],
            [0, 0, 1, 0, 0, 0, 0, 6, 8],
            [0, 0, 8, 5, 0, 0, 0, 1, 0],
            [0, 9, 0, 0, 0, 0, 4, 0, 0]
        ],
        [
            [0, 0, 5, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 9, 0, 0, 0, 0, 4],
            [0, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 6, 0, 4, 0, 0, 5, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 7, 0, 0, 6, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [5, 0, 0, 0, 0, 2, 0, 0, 9],
            [0, 0, 0, 0, 0, 0, 3, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1, 2],
            [0, 0, 0, 0, 0, 7, 0, 0, 0],
            [0, 5, 3, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 8, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0, 0, 3],
            [0, 0, 0, 5, 0, 0, 7, 0, 0],
            [0, 0, 0, 3, 0, 9, 0, 6, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 5],
            [1, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ];

    let currentPuzzleIndex = 0;

    function loadPuzzle(puzzle) {
        puzzle.forEach((row, i) => row.forEach((num, j) => {
            board[i][j].value = num === 0 ? '' : num;
            board[i][j].style.backgroundColor = '';
        }));
    }

    function getBoard() {
        return board.map(row => row.map(input => parseInt(input.value) || 0));
    }

    function setBoard(sudokuBoard) {
        sudokuBoard.forEach((row, i) => row.forEach((num, j) => {
            board[i][j].value = num;
            board[i][j].classList.add('solved');
        }));
    }

    function isSafe(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num || board[x][col] === num || board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
                return false;
            }
        }
        return true;
    }

    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isSafe(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function checkSolution() {
        const currentBoard = getBoard();
        const solvedBoard = JSON.parse(JSON.stringify(currentBoard));
        if (solve(solvedBoard)) {
            currentBoard.forEach((row, i) => row.forEach((num, j) => {
                if (num === 0 || num !== solvedBoard[i][j]) {
                    board[i][j].style.backgroundColor = 'lightcoral';
                } else {
                    board[i][j].style.backgroundColor = 'lightgreen';
                }
            }));
        } else {
            alert("No solution found!");
        }
    }

    solveButton.addEventListener("click", function() {
        const sudokuBoard = getBoard();
        if (solve(sudokuBoard)) {
            setBoard(sudokuBoard);
        } else {
            alert("No solution found!");
        }
    });

    clearButton.addEventListener("click", function() {
        currentPuzzleIndex = (currentPuzzleIndex + 1) % predefinedPuzzles.length;
        loadPuzzle(predefinedPuzzles[currentPuzzleIndex]);
    });

    checkButton.addEventListener("click", checkSolution);

    loadPuzzle(predefinedPuzzles[currentPuzzleIndex]);
});
