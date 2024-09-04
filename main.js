import kaplay from "kaplay";
import 'kaplay/global'
import intro from "./scenes/intro";
import loadAssets from "./loader";

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

go('intro')