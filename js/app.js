/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)
 
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()
function init() {
 board = [
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null,
   null, null, null, null, null, null, null ]
 
 turn = 1
 winner = false
 tie = false
 render()
}
