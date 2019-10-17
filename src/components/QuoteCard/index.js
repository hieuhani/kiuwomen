import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const Header = styled.header`
  img {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  position: relative;
`

const Body = styled.div`
  padding: 1rem;
`

const Avatar = styled.div`
  position: absolute;
  bottom: -20px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border: 3px solid #FFF;
  border-radius: 4px;
`

const Name = styled.h2`
text-align: center;
color: #444;
margin-top: .5rem;
`

const Quote = styled.h3`
text-align: center;
color: #444;
`



export default ({ visible, onClose, wish }) => {
  if (!visible) {
    return null
  }
  return (
    <Container className="modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-dialog">
        <div className="modal-content">
          <Header>
            <img
              src="https://assets.tumblr.com/images/default_header/optica_pattern_10_focused_v3.png?_v=eafbfb1726b334d86841955ae7b9221c"
              alt=""
            />
            <Avatar>
              <img src={wish.avatar} alt="avatar" />
            </Avatar>
          </Header>
          <Body>
            <Name>
              {wish.name}
            </Name>
            <Quote>
              {wish.wish}
            </Quote>
          </Body>
        </div>
      </div>
    </Container>
  )
}