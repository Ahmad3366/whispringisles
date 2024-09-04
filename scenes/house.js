import { checkTransition, colorizeBackground, drawColliders, drawTiles, fetchMapData } from "../utils";

export default async function house(transition) {
	checkTransition(transition)
	
	colorizeBackground('#201729')

	const mapData = await fetchMapData('./maps/house.json')
	for (const layer of mapData.layers) {
		if (layer.name == 'colliders') {
			drawColliders(layer)
			continue
		}
		if (layer.name == 'spawns') {
			for (const o of layer.objects) {
				if (o.name == 'player') {
					// todo: add player
				}
			}
			continue
		}

		drawTiles(layer, 'inner')
	}

	camScale(3.5)
	camPos(150, 120)
}