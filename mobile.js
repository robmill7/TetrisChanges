// Get references to the buttons
const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const btnDrop = document.getElementById('btnDrop');
const btnPause = document.getElementById('btnPause');

// Add click event listeners to the buttons
btnUp.addEventListener('click', handleButtonUp);
btnDown.addEventListener('click', handleButtonDown);
btnLeft.addEventListener('click', handleButtonLeft);
btnRight.addEventListener('click', handleButtonRight);
btnDrop.addEventListener('click', handleButtonDrop);
btnPause.addEventListener('click', handleButtonPause);

// Define button event handler functions
function handleButtonUp() {
  const p = board.rotate(board.piece);
  if (board.valid(p)) {
    board.piece.move(p);
  }
}

function handleButtonDown() {
  const p = moves[KEY.DOWN](board.piece);
  if (board.valid(p)) {
    board.piece.move(p);
    account.score += POINTS.SOFT_DROP;
  }
}

function handleButtonLeft() {
  const p = moves[KEY.LEFT](board.piece);
  if (board.valid(p)) {
    board.piece.move(p);
  }
}

function handleButtonRight() {
  const p = moves[KEY.RIGHT](board.piece);
  if (board.valid(p)) {
    board.piece.move(p);
  }
}

function handleButtonDrop() {
    let p = moves[KEY.DOWN](board.piece);
    while (board.valid(p)) {
      board.piece.move(p);
      p = moves[KEY.DOWN](board.piece);
    }
    board.piece.lock();
  }
  
  let isPaused = false;
  function handleButtonPause() {
         // add user initals for high score database
    if (isPaused) {
        animate();
    } else {
      pause();
    }
  }