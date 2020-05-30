import * as PIXI from "pixi.js";

import textures from "./elf-player.png";

const baseTexture = PIXI.BaseTexture.from(textures);

export default {
  down: [
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(24, 0, 24, 32)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(48, 0, 24, 32)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(72, 0, 24, 32)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(48, 0, 24, 32))
  ]
};
