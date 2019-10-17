import React, { useState, Fragment } from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import giftbox from '../assets/giftbox.png'
import MouseTracker from '../components/MouseTracker'
import universe from '../assets/universe.jpg'
import Point from '../components/Point'
import Hearth from '../components/Hearth'
import wishes from '../data/wishes'
import QuoteCard from '../components/QuoteCard'
import GiftCart from '../components/GiftCart'

const Wrapper = styled.div.attrs(({ mouseX, mouseY }) => ({
  style: {
    left: `${mouseX}px`,
    top: `${mouseY}px`,
  },
}))`
position: absolute;
right: 0;
bottom: 0;
overflow: hidden;
`
const Background = styled.div`
  background: url('${universe}');
  background-repeat: no-repeat;
  width: 3072px;
  height: 1728px;
`;

const FootNote = styled.div`
  position: fixed;
  bottom: 0;
  right: 5px;
  font-size: 10px;
  color: #EEE;
  a {
    color: #CCC;
  }
`;

const GiftWrapper = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  position: fixed;
  bottom: 10px;
  left: 10px;
  img {
    width: 50px;
    height: 50px;
  }
`

const pointPositions = {};
Object.keys(wishes).forEach((name) => {
  pointPositions[name] = {
    baseX: _.random(20, 1840),
    baseY: _.random(20, 860),
    clockwise: Boolean(_.random(0, 1)),
    size: _.random(12, 18),
  };
})

export default function Home() {
  const [name, setName] = useState(null)
  const [showCart, setShowCart] = useState(false)
  return (
    <MouseTracker render={(mouse) => (
      <Fragment>
        <Wrapper mouseX={mouse.x} mouseY={mouse.y}>
          <Background>
            {Object.keys(pointPositions).map((key) => (
              <Point
                key={key}
                baseX={pointPositions[key].baseX}
                baseY={pointPositions[key].baseY}
                clockwise={pointPositions[key].clockwise}
                size={pointPositions[key].size}
                onClick={() => setName(key)}
              />
            ))}
          </Background>
          <FootNote>
            Made with <Hearth /> by <a href="https://github.com/hieuhani" rel="noopener noreferrer" target="_blank">@hieuhani</a>
          </FootNote>
          <QuoteCard
            visible={name !== null}
            wish={wishes[name]}
            onClose={() => setName(null)}
          />
          <GiftCart
            visible={showCart}
            onClose={() => setShowCart(false)}
          />
          <GiftWrapper onClick={() => setShowCart(true)}>
            <img src={giftbox} alt="" />
          </GiftWrapper>
        </Wrapper>
      </Fragment>
    )} />
  )
}
