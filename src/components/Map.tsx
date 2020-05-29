import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import terrain from "../assets/gfx/terrain";

import seedrandom from "seedrandom";

const TYPE = "Map";

interface Props {
  app: PIXI.Application;
  chunkId: string;
}

const buildMapTexture = (app, chunkId) => {
  let rng = seedrandom(chunkId);

  let now = new Date();

  let renderTexture = PIXI.RenderTexture.create({
    width: 2048,
    height: 2048
  });

  for (let x = 0; x < 128; x++) {
    for (let y = 0; y < 128; y++) {
      let rnd = Math.abs(rng.int32() % terrain.grass1.length);
      let grass = new PIXI.Sprite(terrain.grass1[rnd]);
      grass.position.x = x * 16;
      grass.position.y = y * 16;
      app.renderer.render(grass, renderTexture, false);
    }
  }

  return renderTexture;
};

export const behavior = {
  customDisplayObject: props => {
    let { app, chunkId } = props;

    let texture = buildMapTexture(app, chunkId);

    return PIXI.Sprite.from(texture);
  },
  customApplyProps: (
    instance: PIXI.Sprite,
    oldProps: Props,
    newProps: Props
  ) => {
    let { app, chunkId } = newProps;

    if (chunkId === oldProps.chunkId) {
      return;
    }

    instance.texture = buildMapTexture(app, chunkId);
  }
};

export default withApp(CustomPIXIComponent(behavior, TYPE));
