import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 0;
background-color: transparent;
max-width: 50%;
flex: 0 0 50%;
display: flex;
`
const Wrapper = styled.button`
display: flex;
flex-direction: row;
background-color: #FFF;
border-radius: 4px;
margin: 0.5rem;
padding: .5rem;
flex: 1;
`
const ImageWrapper = styled.div`
width: 80px;
margin-right: 1rem;
img {
  width: 100%;
}
`
const Name = styled.h3``
const Info = styled.div``

export default ({ item, onClick, selected }) => (
  <Container>
    <Wrapper onClick={onClick}>
      <ImageWrapper>
        <img src={item.image} alt={item.name} />
      </ImageWrapper>
      <Info>
        <Name>
          {item.name}
        </Name>
      </Info>
    </Wrapper>
  </Container>
)