import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const TYPE = "Viewport";

interface Props {
  target: PIXI.IPoint;
  screenSize: PIXI.IPoint;
  offset: PIXI.IPoint;
}

export const behavior = {
  customDisplayObject: (props: Props) => {
    const { target, screenSize, offset } = props;
    const scale = 2;

    const viewport = new PIXI.Container();
    viewport.scale = new PIXI.Point(scale, scale);
    // viewport.transform.position = new PIXI.Point(256 - 12, 256 - 16);
    viewport.position.set(
      screenSize.x / 2 - target.x * 16 * scale + offset.x,
      screenSize.y / 2 - target.y * 16 * scale + offset.y
    );

    return viewport;
  }
};
export default withApp(CustomPIXIComponent(behavior, TYPE));
