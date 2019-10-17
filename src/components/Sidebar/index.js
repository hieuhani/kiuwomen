import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: rgba(0, 0, 0, .6);
  z-index: 1;
`

export default () => (
  <Wrapper>
    Sidebar
  </Wrapper>
)
