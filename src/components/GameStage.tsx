import React from "react";
import { useSelector } from "react-redux";
import { Stage } from "react-pixi-fiber";

import Viewport from "./Viewport";
import Map from "./Map";
import Player from "./Player";

const GameStage = props => {
  const windowSize = useSelector(state => state.settings.windowSize);
  const playerPosition = useSelector(state => state.player.position);

  const options = {
    backgroundColor: 0x6495ed,
    width: windowSize.x,
    height: windowSize.y
  };

  return (
    <Stage options={options}>
      <Viewport
        screenSize={windowSize}
        target={playerPosition}
        offset={{ x: -24, y: -16 }}
      >
        <Map chunkId={4345} />
        <Player position={playerPosition} />
        <Player position={{ x: 1, y: 1 }} />
      </Viewport>
    </Stage>
  );
};

export default GameStage;
