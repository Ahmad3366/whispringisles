export default function loadAssets() {
	loadBitmapFont("unscii", "./fonts/unscii_8x8.png", 8, 8)

	loadRoot('./sprites/')
	loadSprite('logo', 'Logo.png')

	// loadSprite('overworld', 'Overworld.png', {
	// 	sliceX: 40,
	// 	sliceY: 36
	// })
	loadSprite('inner', 'Inner.png', {
		sliceX: 40,
		sliceY: 25
	})
}