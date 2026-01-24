const dx = [2, 2, -2, -2, 1, 1, -1, -1];
const dy = [1, -1, 1, -1, 2, -2, 2, -2];

const board = document.getElementById("board");

let startPos = null;
let endPos = null;

function createBoard() {
  board.innerHTML = "";

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if ((r + c) % 2 === 0) square.classList.add("white");
      else square.classList.add("black");

      square.dataset.row = r;
      square.dataset.col = c;

      square.addEventListener("click", () => selectSquare(square));

      board.appendChild(square);
    }
  }
}

function selectSquare(square) {
  if (!startPos) {
    startPos = square;
    square.classList.add("start");
  } else if (!endPos && square !== startPos) {
    endPos = square;
    square.classList.add("end");
  }
}

function reset() {
  startPos = null;
  endPos = null;
  createBoard();
}

function start() {
  if (!startPos || !endPos) {
    alert("Please select both start and end positions.");
    return;
  }

  const sx = +startPos.dataset.row;
  const sy = +startPos.dataset.col;
  const ex = +endPos.dataset.row;
  const ey = +endPos.dataset.col;

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  const queue = [];
  queue.push({ x: sx, y: sy, parent: null });
  visited[sx][sy] = true;

  let endNode = null;

  while (queue.length) {
    const cur = queue.shift();

    if (cur.x === ex && cur.y === ey) {
      endNode = cur;
      break;
    }

    for (let i = 0; i < 8; i++) {
      const nx = cur.x + dx[i];
      const ny = cur.y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < 8 && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push({ x: nx, y: ny, parent: cur });
      }
    }
  }

  animatePath(endNode);
}

function animatePath(node) {
  const path = [];

  while (node) {
    path.push(node);
    node = node.parent;
  }

  path.reverse();

  let index = 0;
  const speed = +document.getElementById("speed").value;

  let knight = null;

  const interval = setInterval(() => {
    if (index >= path.length) {
      clearInterval(interval);
      return;
    }

    const { x, y } = path[index];
    const square = document.querySelector(
      `.square[data-row='${x}'][data-col='${y}']`
    );

    // Remove knight from previous square
    if (knight) {
      knight.textContent = "";
      knight.classList.add("path");
    }

    // Place knight on current square
    square.textContent = "♞";
    square.style.fontSize = "32px";
    knight = square;

    index++;
  }, speed);
}

window.onload = () => {
  createBoard();
};
