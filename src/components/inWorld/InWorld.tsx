import React from 'react'

import { IState } from '../../store/inWorld';

import Viewport from "./Viewport";
import Map from "./Map";
import Player from "./Player";

interface IProps {
  state: IState,
}

const InWorld = (props: IProps) => {
  return (
    <Viewport
      screenSize={props.state.windowSize}
      target={{ x: 0, y: 0 }}
      offset={{ x: -24, y: -16 }}
    >
      <Map chunkId="4345" />
      <Player position={{ x: 0, y: 0 }} />
      <Player position={{ x: 1, y: 1 }} />
    </Viewport>
  )
}

export default InWorld;