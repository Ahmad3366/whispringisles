export default function loadAssets() {
	loadBitmapFont("unscii", "./fonts/unscii_8x8.png", 8, 8)

	loadRoot('./sprites/')
	loadSprite('logo', 'Logo.png')

	loadSprite('overworld', 'Overworld.png', {
		sliceX: 40,
		sliceY: 36
	})
	loadSprite('inner', 'Inner.png', {
		sliceX: 40,
		sliceY: 25
	})
	loadSprite('player', 'character.png', {
		sliceX: 12,
		sliceY: 8,
		anims: {
			'idle-down': 0,
			'walk-down': { from: 0, to: 3, loop: true },

			'idle-up': 24,
			'walk-up': { from: 24, to: 27, loop: true },

			'idle-side': 12,
			'walk-side': { from: 12, to: 15, loop: true },
		}
	})
}