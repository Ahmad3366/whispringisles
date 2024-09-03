export function colorizeBackground(HexColor) {
	add([
		rect(width(), height()),
		color(Color.fromHex(HexColor)),
		fixed()
	])
}

export async function addPartical(position) {

	const partical = add([
		rect(5, 5),
		anchor("center"),
		pos(position),
		color(rgb(rand(0, 255), rand(0, 255), rand(0, 255))),
		lifespan(3, { fade: 0.5 }),
		state('tl', ['tl', 'tr']),
		timer(),
		opacity(),
		move(UP, 20),
		{
			moveValue: 10,
		}
	])

	partical.onStateEnter('tl', async () => {
		await tween(partical.pos.x, partical.pos.x - partical.moveValue, 1, x => partical.pos.x = x, easings.easeInOutCubic)
		partical.enterState('tr')
	})
	partical.onStateEnter('tr', async () => {
		await tween(partical.pos.x, partical.pos.x + partical.moveValue, 1, x => partical.pos.x = x, easings.easeInOutCubic)
		partical.enterState('tl')
	})
}

export function transitionToScene(sceneName) {
	add([
		rect(width(), height()),
		color(BLACK),
		opacity(1),
		stay(),
		z(1000),
		fixed(),
		{
			add() {
				tween(0, 1, 1, (t) => this.opacity = t, easings.linear)
				wait(1, () => {
					go(sceneName, this)
				})
			}
		}
	])
}

export function checkTransition(transition) {
	if (transition) {
		tween(1, 0, 1, (t) => transition.opacity = t, easings.easeOutQuad)
		wait(1, () => {
			destroy(transition)
		})
	}
}