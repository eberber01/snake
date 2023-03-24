const CANVAS_SIZE = 500;
const BLOCK_SIZE = 25;
let speed = 100;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let head = new Point(0, 0);
let snake = new Snake(head);
let board = new Board();
let apple = new Apple(board);
let gameLoop = true;
let dir = 2; // 1: up, 2: down, 3: left, 4: right

canvas.style.background = "white";
board.occupyCell(head.x, head.y);

const resetGame = () => {
head = new Point(0, 0);
snake = new Snake(head);
board = new Board();
apple = new Apple(board);
gameLoop = true;
dir = 2; // 1: up, 2: down, 3: left, 4: right
draw()
};
const draw = () => {
	//clear canvas
	ctx.fillStyle = "black";
	ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
	snake.draw(ctx);
	snake.move(dir, apple, board);

	apple.draw(ctx);

	if (gameLoop) {
		setTimeout(draw, speed);
	} else {
		displayGameOver();
	}
};

const displayGameOver = () => {
	// ctx.fillStyle = "white";
	// ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

	ctx.fillStyle = "black";
	ctx.font = "bold 16px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("GAME OVER", CANVAS_SIZE / 2, CANVAS_SIZE / 2);
};

document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "w":
			if (dir != 2) {
				dir = 1;
			}
			break;
		case "s":
			if (dir != 1) {
				dir = 2;
			}

			break;
		case "a":
			if (dir != 4) {
				dir = 3;
			}
			break;
		case "d":
			if (dir != 3) {
				dir = 4;
			}
			break;
	}
});

draw();
