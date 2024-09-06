export function setCamera(camBoundaries) {
	const player = get('player')[0]

	const boundaries = {...camBoundaries}
	camPos(boundaries.left, boundaries.top)

	player.onUpdate(() => {
		// if (player.pos.x < boundaries.left) {
		// 	camPos(boundaries.left, player.pos.y)
		// 	return
		// } 
		// if (player.pos.y < boundaries.top) {
		// 	camPos(player.pos.x, boundaries.top)
		// 	return
		// }
		camPos(player.pos)
		// debug.log(camPos())
	})
}