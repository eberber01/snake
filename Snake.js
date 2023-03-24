class Snake {
	constructor(head) {
		this.body = [head];
		this.length = 1;
		this.head = head;
	}

	draw(ctx) {
		for (let i = 0; i < this.length; i++) {
			let node = this.body[i];
			ctx.fillStyle = "green";
			ctx.fillRect(node.x, node.y, BLOCK_SIZE, BLOCK_SIZE);
		}
	}

	move(dir, apple, board) {
		//move head
		let prevX = this.body[0].x;
		let prevY = this.body[0].y;
		board.unoccupyCell(prevX, prevY);
		switch (dir) {
			case 1:
				if (head.y > 0) {
					head.y -= BLOCK_SIZE;
					break;
				}
				gameLoop = false;
				console.log("game over");
				return;
			case 2:
				if (head.y < 475) {
					head.y += BLOCK_SIZE;
					break;
				}
				gameLoop = false;
				console.log("game over");
				return;
			case 3:
				if (head.x > 0) {
					head.x -= BLOCK_SIZE;
					break;
				}
				gameLoop = false;
				console.log("game over");
				return;
			case 4:
				if (head.x < 475) {
					head.x += BLOCK_SIZE;
					break;
				}
				gameLoop = false;
				console.log("game over");
				return;
		}

		// collision check
		if (board.isOccupied(head.x, head.y)) {
			gameLoop = false;
			console.log("game over");
			return;
		}

		board.occupyCell(head.x, head.y);
		if (head.x == apple.x && head.y == apple.y) {
			apple.respawn();
			this.addNode();
		}

		// move rest of body
		for (let i = 1; i < this.length; i++) {
			let x = this.body[i].x;
			let y = this.body[i].y;
			console.log(x, y, i)
			board.unoccupyCell(x, y);

			this.body[i].x = prevX;
			this.body[i].y = prevY;
			board.occupyCell(prevX, prevY);

			prevX = x;
			prevY = y;
		}
	}

	addNode() {
		let tail = this.body[this.length - 1];
		let newTail = new Point(
			tail.x,
			tail.y 
		);

		this.body.push(newTail);
		this.length += 1;
	}
}
