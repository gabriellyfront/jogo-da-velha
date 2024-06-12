const cells = document.querySelectorAll(".cell");
const game = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    const cell = document.getElementById(e.target.id);

    if (cell.innerText == "") {
      cell.innerText = currentPlayer;
      game[cell.id] = currentPlayer;

      if (isWinner(currentPlayer)) {
        alert(`Player ${currentPlayer} wins!`);
        location.reload();
      } else if (isTie()) {
        alert("It's a tie!");
        location.reload();
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function isTie() {
  return game.every((cell) => cell !== "");
}

function isWinner(player) {
  return (
    (game[0] == player && game[1] == player && game[2] == player) ||
    (game[3] == player && game[4] == player && game[5] == player) ||
    (game[6] == player && game[7] == player && game[8] == player) ||
    (game[0] == player && game[3] == player && game[6] == player) ||
    (game[1] == player && game[4] == player && game[7] == player) ||
    (game[2] == player && game[5] == player && game[8] == player) ||
    (game[2] == player && game[4] == player && game[6] == player) ||
    (game[0] == player && game[4] == player && game[8] == player)
  );
}
