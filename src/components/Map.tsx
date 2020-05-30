import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import seedrandom from "seedrandom";
import * as PIXI from "pixi.js";
import terrain from "../assets/gfx/terrain";

const TYPE = "Map";
const MAP_SIZE = 8;

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

  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
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
