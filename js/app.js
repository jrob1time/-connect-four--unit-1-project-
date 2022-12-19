/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2, 3],  [1, 2, 3, 4],   [2,3,4,5],   [3,4,5,6],
 [7, 8, 9, 10],  [8, 9, 10, 11], [9,10,11,12],  [10,11,12,13,],
 [14, 15, 16, 17],  [15, 16, 17, 18],  [16,17,18,19], [17,18,19,20],
 [21,22,23,24], [22,23,24,25], [23,24,25,26], [24,25,26,27],
 [28,29,30,31], [29,30,31,32], [30,31,32,33], [31,32,33,34],
 [35,36,37,38], [36,37,38,39], [37,38,39,40], [38,39,40,41],
 [0, 7, 14, 21], [0, 8, 16, 24], [1, 8, 15, 22], [1, 9, 17, 25],
 [2, 9, 16, 23],  [2, 10, 18, 26],  [3, 10, 17, 24], [4, 11, 18, 25],
 [4, 10, 16, 22], [5, 11, 17, 23], [5, 12, 19, 26],  [6, 12, 18, 24],
 [6, 13, 20, 27], [7, 15, 23, 31], [8, 16, 24, 32],   [9, 17, 25, 33],
 [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31], [14, 22, 30, 38],
 [20, 26, 32, 38], [21, 15, 9, 3], [27, 19, 11, 3], [28, 22, 16, 10],
 [34, 26, 18, 10], [35, 28, 21, 14], [35, 29, 23, 17], [36, 29, 22, 15],
 [36, 30, 24, 18], [37, 30, 23, 16], [37, 31, 25, 19], [38, 31, 24, 17],
 [39, 31, 23, 15], [39, 32, 25, 18], [40, 32, 24, 16],  [40, 33, 26, 19],
 [41, 33, 25, 17],  [41, 34, 27, 20],
 ]
 

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/

const circleEls = document.querySelectorAll('.cir')
const messageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('reset')


/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)

resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()
function init() {
 board = [null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,]
 
 turn = 1
 winner = false
 tie = false
 render()
}
function render() {
  updateBoard()
  updateMessage()
}
function updateBoard() {
  board.forEach((element, idx) => {
      if (element === 1) {
        circleEls[idx].innerText = 'x'
      } else if (element === -1) {
        circleEls[idx].innerText = 'o'
      } else {
        circleEls[idx].innerText = ''
      }
  })
}

function updateMessage() {
  if (winner === false && tie === false) {
      messageEl.textContent = (turn === 1 ? 'Blue players turn.' : 'Black players turn.')
  } else if (winner === false && tie === true) {
      messageEl.textContent = "You Tied!"
  } else {
      messageEl.textContent = (turn === 1 ? 'Blue player wins!' : 'Black player wins!')
  }
}
function handleClick(evt) {
  // console.log(evt);
  let crIdx = +evt.target.id.replace('cr','')
  if (board[crIdx] !== null) {
      return
  } else if (winner === true) {
      return
  }
  placeToken(crIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placeToken(idx) {
  board[idx] = turn
}
function checkForTie() {
  if (board.includes(null)) return
  tie = true
}
function checkForWinner() {
  winningCombos.forEach(function(arr) {
      let sum = 0
      arr.forEach(function(idx) {
          sum += board[idx]
      })
      if (sum === 4 || sum === -4) {
          winner = true
      }
  })
}
function switchPlayerTurn() {
  if (!winner) turn *= -1
}