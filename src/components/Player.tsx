import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import playerTexture from "../assets/gfx/elf-player";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const TYPE = "Player";

interface Props {
  position: PIXI.Point;
}

export const behavior = {
  customDisplayObject: props => {
    let { position } = props;

    const instance = PIXI.Sprite.from(playerTexture.down[0]);
    instance.position = new PIXI.Point(position.x * 16, position.y * 16);
    instance.anchor.set(0.15, 0.5);
    return instance;
  },
  customApplyProps: (
    instance: PIXI.Sprite,
    oldProps: Props,
    newProps: Props
  ) => {
    let { position } = newProps;

    instance.position = new PIXI.Point(position.x * 16, position.y * 16);
  }
};
export default withApp(CustomPIXIComponent(behavior, TYPE));
