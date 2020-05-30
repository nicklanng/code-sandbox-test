import React from "react";
import { useSelector } from "react-redux";
import { Stage } from "react-pixi-fiber";

const GameStage = props => {
  const windowSize = useSelector(state => state.settings.windowSize);

  const options = {
    backgroundColor: 0x6495ed,
    width: windowSize.x,
    height: windowSize.y
  };
  return <Stage options={options}>{props.children}</Stage>;
};

export default GameStage;
