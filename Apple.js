class Apple {
	constructor(board) {
		this.board = board;

		let point = this.getRandUnoccupiedPoint(board);
		this.x = point.x;
		this.y = point.y;
	}

	draw(ctx) {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);
	}

	respawn() {
		let newPoint = this.getRandUnoccupiedPoint();
		this.x = newPoint.x;
		this.y = newPoint.y;
	}

	getRandUnoccupiedPoint() {
		let x = Math.floor(Math.random() * 20) * BLOCK_SIZE;
		let y = Math.floor(Math.random() * 20) * BLOCK_SIZE;
		while (this.board.isOccupied(x, y)) {
			x = Math.floor(Math.random() * 20) * BLOCK_SIZE;
			y = Math.floor(Math.random() * 20) * BLOCK_SIZE;
		}
		return new Point(x, y);
	}
}
