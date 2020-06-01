import React from "react";
import { useSelector } from "react-redux";
import { Stage } from "react-pixi-fiber";

import InWorld from "./inWorld/InWorld";

export default () => {
  const inWorldState = useSelector((state: any) => state.inWorld);

  const options = {
    backgroundColor: 0x6495ed,
    width: inWorldState.windowSize.x,
    height: inWorldState.windowSize.y
  };

  return (
    <Stage options={options}>
      <InWorld state={inWorldState} />
    </Stage>
  );
};
