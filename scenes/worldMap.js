import { setCamera } from "../camera";
import { addPlayer } from "../entities/player";
import { checkTransition, drawColliders, drawTiles, fetchMapData, showFps } from "../utils";

export default async function worldMap(transition) {
	checkTransition(transition)
	
	const mapData = await fetchMapData('./maps/map1.json')
	for (const layer of mapData.layers) {
		if (layer.name == 'colliders') {
			drawColliders(layer)
			continue
		}
		if (layer.name == 'spawns') {
			for (const o of layer.objects) {
				if (o.name == 'player') {
					const player = addPlayer(vec2(o.x, o.y + 16))
					player.setMovment()
				}
			}
			continue
		}

		drawTiles(layer, 'overworld', true)
	}

	camScale(3.5)
	setCamera({left: 183, top: 119})

	showFps()
}