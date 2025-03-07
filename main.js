import kaplay from "kaplay";
import 'kaplay/global'
import intro from "./scenes/intro";
import loadAssets from "./loader";

import worldMap from "./scenes/worldMap";
import house from "./scenes/house";

kaplay({
	height: 720,
	width: 1280,
	letterbox: true
})

loadAssets()

const scenes = {
	intro,
	worldMap: (transition) => worldMap(transition),
	house: (transition) => house(transition)
}

for (const key in scenes) {
	scene(key, scenes[key])
}

go('house')