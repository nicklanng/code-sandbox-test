import * as PIXI from "pixi.js";

import textures from "./terrain.png";

const baseTexture = PIXI.BaseTexture.from(textures);

export default {
  grass1: [
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(16, 0, 16, 16)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(32, 0, 16, 16)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(48, 0, 16, 16)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(64, 0, 16, 16)),
    new PIXI.Texture(baseTexture, new PIXI.Rectangle(80, 0, 16, 16))
  ]
};
