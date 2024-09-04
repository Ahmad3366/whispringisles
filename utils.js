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

export async function fetchMapData(path) {
	const mapData = await fetch(path)
	return await mapData.json()
}

export async function drawTiles(layer, tileset) {
  let nbOfDrawnTiles = 0;
  const tilePos = vec2(0, 0);
  let tiles = []
  for (const tile of layer.data) {
    if (nbOfDrawnTiles % layer.width == 0) {
      tilePos.x = 0
      tilePos.y += 16
    } else {
      tilePos.x += 16
    }

    nbOfDrawnTiles++
    if (tile == 0) continue

    // const spriteData = getSprite('block')

    tiles.push({
      tileFrame: tile - 1,
      x: tilePos.x,
      y: tilePos.y,
    })
    // TODO add it inside the push method
    // sprData: spriteData.data

    // add([
    //     sprite('tileset', { frame: tile - 1 }),
    //     pos(tilePos),
    //     offscreen({ hide: true })
    // ])
  }

  onDraw(() => {

    for (const tile of tiles) {

      drawSprite({
        sprite: tileset,
        pos: vec2(tile.x, tile.y),
        frame: tile.tileFrame
      })
      
      // drawUVQuad({
      //   pos: vec2(tile.x, tile.y),
      //   width: 32,
      //   height: 32,
      //   tex: tile.sprData.tex,
      //   quad: tile.sprData.frames[tile.tileFrame]
      // })
    }

  })
}

export function drawColliders(layer) {
  for (const object of layer.objects) {
    add([
      area({
        shape: new Rect(
          vec2(0),
          object.width,
          object.height
        )
      }),
      pos(object.x, object.y + 16),
      body({ isStatic: true }),
      offscreen({ hide: true }),
      object.name
    ])
  }
}