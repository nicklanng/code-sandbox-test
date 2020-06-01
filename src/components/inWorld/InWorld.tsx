import React from 'react'

import { IState } from '../../store/inWorld';

import Viewport from "./Viewport";
import Map from "./Map";
import Player from "./Player";

interface IProps {
  state: IState,
}

const InWorld = (props: IProps) => {
  const { state } = props;
  return (
    <Viewport size={state.windowSize} target={state.player.position} >
      <Map chunkId="4345" />
      <Player position={state.player.position} />
      <Player position={{ x: 1, y: 1 }} />
    </Viewport>
  )
}

export default InWorld;