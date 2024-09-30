export function addPlayer(position) {
	return add([
		sprite('player', {anim: 'idle-down'}),
		pos(position),
		area({shape: new Rect(vec2(0, 8), 8, 4)}),
		anchor('center'),
		body(),
		'player',
		{
			dir: 'down',
			isMoving: false,
			speed: 80,


			add() {
				this.onCollide('exit-house', () => {
					go('worldMap')
				})
			},

			update() {
				if (this.isMoving) {
					if (this.getCurAnim().name !== `walk-${this.dir}`) {
						this.play(`walk-${this.dir}`)
					}
				} else {
					this.play(`idle-${this.dir}`)
				}
			},

			setMovment() {
				onKeyDown('s', () => {
					this.move(0, this.speed)
					this.dir = 'down'
					this.isMoving = true
				})
				onKeyDown('w', () => {
					this.move(0, -this.speed)
					this.dir = 'up'
					this.isMoving = true
				})
				onKeyDown('a', () => {
					this.move(-this.speed, 0)
					this.dir = 'side'
					this.isMoving = true
					this.flipX = true
				})
				onKeyDown('d', () => {
					this.move(this.speed, 0)
					this.dir = 'side'
					this.isMoving = true
					this.flipX = false
				})

				onKeyRelease(key => {
					this.isMoving = false
				})
			}
		}
	])
}