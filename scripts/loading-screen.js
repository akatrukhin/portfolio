class LoadingScreen {
	static get inputProperties() {
		return ['--path'];
	}

	paint(ctx, size, properties) {
		let x = size.width / 2;
		let y = size.height / 2;

		ctx.strokeStyle = 'red';
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.arc(x, y, 50, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.closePath();
	}
}

// @ts-ignore
registerPaint('loading-screen', LoadingScreen);
