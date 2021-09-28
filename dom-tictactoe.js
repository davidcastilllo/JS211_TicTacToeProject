//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!
let h1,h2,h3,v1,v2,v3,d1,d2
let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];

// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    updateBoard(element.id)
    checkForWin()
    
  }
}

const addMarker = (id) => {
  console.log(`We'll place a mark on square: ${id}`)
  document.getElementById(id).innerHTML = currentMarker
}

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part of the newly created number as row & column
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)
  board[row][column] = currentMarker
  
  h1 = board[0][0] + board[0][1] + board[0][2]
  h2 = board[1][0] + board[1][1] + board[1][2]
  h3 = board[2][0] + board[2][1] + board[2][2]
  v1 = board[0][0] + board[1][0] + board[2][0]
  v2 = board[0][1] + board[1][1] + board[2][1]
  v3 = board[0][2] + board[1][2] + board[2][2]
  d1 = board[0][0] + board[1][1] + board[2][2]
  d2 = board[0][2] + board[1][1] + board[2][0]
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    setTimeout(window.alert(`Player ${currentMarker} won!`),4000)
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}

const horizontalWin = () => {
  if (h1 === 'XXX' || h1 === 'OOO') {return true} 
  else if (h2 === 'XXX' || h2 === 'OOO') {return true}
  else if (h3 === 'XXX' || h3 === 'OOO') {return true}
  else {return false}
}

const verticalWin = () => {
  if (v1 === 'XXX' || v1 === 'OOO') {return true} 
  else if (v2 === 'XXX' || v2 === 'OOO') {return true}
  else if (v3 === 'XXX' || v3 === 'OOO') {return true}
  else {return false}
}

const diagonalWin = () => {
  if (d1 === 'XXX' || d1 === 'OOO') {return true} 
  else if (d2 === 'XXX' || d2 === 'OOO') {return true}
  else {return false}
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === "X" ? "O" : "X"
}

const resetBoard = () => {
  // sanity check: this tells us the function is being called
  console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collections and clears out the Xs and Os
  for (i=0; i<squares.length; i++) {
    squares[i].innerHTML = null
  }
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ]; 

}

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
