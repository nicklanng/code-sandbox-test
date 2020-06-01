import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const TYPE = "Viewport";
const scale = 3;

interface Props {
  app: PIXI.Application;
  target: PIXI.IPoint;
  screenSize: PIXI.IPoint;
  offset: PIXI.IPoint;
}

export const behavior = {
  customDisplayObject: (props: Props) => {
    const { app, target, screenSize, offset } = props;

    const viewport = new PIXI.Container();
    viewport.scale = new PIXI.Point(scale, scale);
    viewport.position = new PIXI.Point(
      screenSize.x / 2 - target.x * 16 * scale + offset.x,
      screenSize.y / 2 - target.y * 16 * scale + offset.y
    );
    viewport.interactive = true;
    viewport.on("pointerdown", (e: any) => {
      let x = e.data.global.x - e.target.transform.worldTransform.tx;
      let y = e.data.global.y - e.target.transform.worldTransform.ty;
      console.log(Math.floor(x / scale / 16), Math.floor(y / scale / 16));
    });

    return viewport;
  },
  customApplyProps: (
    instance: PIXI.Container,
    oldProps: Props,
    newProps: Props
  ) => {
    const { app, target, screenSize, offset } = newProps;
    instance.position = new PIXI.Point(
      screenSize.x / 2 - target.x * 16 * scale + offset.x,
      screenSize.y / 2 - target.y * 16 * scale + offset.y
    );
  }
};

export default withApp(CustomPIXIComponent(behavior, TYPE));
