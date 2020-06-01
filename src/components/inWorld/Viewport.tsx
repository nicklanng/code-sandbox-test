import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import IVector2 from '../../common/IVector2'

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const TYPE = "Viewport";
const scale = 3;
const offset = { x: -24, y: -16 }

interface IProps {
  target: IVector2;
  size: IVector2;
}

export const behavior = {
  customDisplayObject: (props: IProps) => {
    const { target, size } = props;

    const viewport = new PIXI.Container();
    viewport.scale = new PIXI.Point(scale, scale);
    viewport.position = new PIXI.Point(
      size.x / 2 - target.x * 16 * scale + offset.x,
      size.y / 2 - target.y * 16 * scale + offset.y
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
    oldProps: IProps,
    newProps: IProps
  ) => {
    const { target, size } = newProps;
    instance.position = new PIXI.Point(
      size.x / 2 - target.x * 16 * scale + offset.x,
      size.y / 2 - target.y * 16 * scale + offset.y
    );
  }
};

export default CustomPIXIComponent(behavior, TYPE);
