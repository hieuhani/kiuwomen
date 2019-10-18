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
import { useLayout } from '../contexts/LayoutContext'

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

export default function Home() {
  const [name, setName] = useState(null)
  const [showCart, setShowCart] = useState(false)
  const layout = useLayout()
  const { width, height } = layout.dimensions

  const posisions = {};
  Object.keys(wishes).forEach((name) => {
    posisions[name] = {
      baseX: _.random(20, width),
      baseY: _.random(20, height),
      clockwise: Boolean(_.random(0, 1)),
      size: _.random(12, 18),
    }
  })
  return (
    <MouseTracker render={(mouse) => (
      <Fragment>
        <Wrapper mouseX={mouse.x} mouseY={mouse.y}>
          <Background>
            {Object.keys(posisions).map((key) => (
              <Point
                key={key}
                baseX={posisions[key].baseX}
                baseY={posisions[key].baseY}
                clockwise={posisions[key].clockwise}
                size={posisions[key].size}
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
