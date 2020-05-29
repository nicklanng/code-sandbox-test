import { Viewport } from "pixi-viewport";
import { CustomPIXIComponent, withApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const TYPE = "Viewport";

export const behavior = {
  customDisplayObject: props => {
    const viewport = new Viewport({
      screenWidth: 512,
      screenHeight: 512,
      worldWidth: 2048,
      worldHeight: 2048,
      ticker: props.app.ticker,
      interaction: props.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    });
    viewport.clampZoom({ minScale: 1, maxScale: 4 });
    viewport.on("drag-start", () => console.log("drag-start"));
    viewport.on("drag-end", () => console.log("drag-end"));

    viewport
      .drag()
      .wheel()
      .decelerate();

    viewport.scaled = 2;
    return viewport;
  }
};
export default withApp(CustomPIXIComponent(behavior, TYPE));
