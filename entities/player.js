export function addPlayer(position) {
	return add([
		sprite('player'),
		pos(position),
		area({shape: new Rect(vec2(0, 8), 8, 4)}),
		anchor('center'),
		body(),
		'player',
		{
			setMovment() {
				onKeyDown('s', () => {
					this.move(0, 90)
				})
				onKeyDown('w', () => {
					this.move(0, -90)
				})
				onKeyDown('a', () => {
					this.move(-90, 0)
				})
				onKeyDown('d', () => {
					this.move(90, 0)
				})
			}
		}
	])
}