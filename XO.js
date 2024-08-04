
// fetch API //

// let promise = fetch("https://goweather.herokuapp.com/weather/Delhi")
// promise.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value2) => {
//     console.log(value2)
// })


// sending post request with fetch API  //

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (board[index] === '') {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} is winner!`);
            resetGame();
        } else if (board.every(cell => cell !== '')) {
            alert('Oops!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
