import fadeInOut from '../components/fadeInOut';
import { addPartical, colorizeBackground, transitionToScene } from '../utils';

export default async function intro() {
	colorizeBackground("#1f1023")
	let stopParticals = false

	async function showText(position) {

		const pharses = [
			{ title: 'Magic', color: [100, 120, 255] },
			{ title: 'Gold', color: [255, 255, 40] },
			{ title: 'Glory', color: [200, 200, 200] },
			{ title: "it's all there ...", color: [200, 200, 200] },
		]

		for (let i = 0; i < pharses.length; i++) {

			add([
				text(pharses[i].title, { font: "unscii" }),
				pos(position),
				anchor('center'),
				opacity(0),
				timer(),
				color(rgb(...pharses[i].color)),
				fadeInOut()
			])
			await wait(4)
		}
	}

	loop(1.5, () => {
		if (stopParticals) return
		addPartical(vec2(rand(center().x - 50, center().x + 50), rand(center().y - 70, center().y + 50)))
	})

	await showText(center())
	stopParticals = true

	add([
		sprite('logo'),
		pos(center().x, center().y - 150),
		anchor('center'),
		scale(4),
		opacity(),
		{
			add() {
				this.fadeIn(3)
			}
		}
	])

	wait(1.5, () => {
		add([
			text('Press [Enter] to start', { font: 'unscii', size: 20 }),
			pos(center().x, center().y + 50),
			anchor('center'),
			scale(),
			opacity(), ,
			color(Color.fromHex('#faf7ce')),
			{
				add() {
					this.fadeIn(1)
				}
			}
		])

		onKeyPress('enter', () => {
			transitionToScene('house')
		})
	})
}