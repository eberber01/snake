class Board {
	constructor() {
		this.board = [];
		for (let i = 0; i < CANVAS_SIZE / BLOCK_SIZE; i++) {
			this.board.push([].fill(0, 0, CANVAS_SIZE / BLOCK_SIZE));
		}
	}

	occupyCell(x, y) {
		this.board[y / BLOCK_SIZE][x / BLOCK_SIZE] = 1;
	}
	unoccupyCell(x, y) {
		this.board[y / BLOCK_SIZE][x / BLOCK_SIZE] = 0;
	}

	isOccupied(x, y) {
		return this.board[y / BLOCK_SIZE][x / BLOCK_SIZE] == 1;
	}

	reset(){
		for (let i = 0; i < CANVAS_SIZE / BLOCK_SIZE; i++) {
			this.board.push([].fill(0, 0, CANVAS_SIZE / BLOCK_SIZE));
		}
	}
}
