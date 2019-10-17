import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Clockwise = keyframes`
  from { transform: rotate(0deg) translateX(10px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
`

const Anticlockwise = keyframes`
  from { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
  to   { transform: rotate(0deg) translateX(10px) rotate(0deg); }
`

const PointStyle = styled.a`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  border: 3px solid #CCFF00;
  position: absolute;
  top: ${({ baseY }) => `${baseY}px`};
  left: ${({ baseX }) => `${baseX}px`};
  animation: ${({ clockwise }) => clockwise ? Clockwise: Anticlockwise } 5s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  &:focus {
    outline: none;
  }
`

export default class Point extends Component {
  render() {
    const {
      baseX,
      baseY,
      clockwise,
      size,
      onClick,
    } = this.props
    return (
      <PointStyle
        onClick={onClick}
        baseX={baseX}
        baseY={baseY}
        clockwise={clockwise}
        size={size}
      />
    )
  }
}
