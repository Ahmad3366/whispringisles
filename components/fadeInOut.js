export default function fadeInOut() {
	return {
		id: 'fadeInOut',
		require: ['opacity'],

		async add() {
			await wait(1)
			await tween(0, 1, 1, o => this.opacity = o)
			await wait(1)
			await tween(1, 0, 1, o => this.opacity = o)
			destroy(this)
		}
	}
}