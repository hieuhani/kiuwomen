import React from 'react'
import styled from 'styled-components'
import Hearth from '../Hearth'

const Container = styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Profile = styled.div`
display: flex;
flex-direction: row;
align-items: center;
.avatar {
  width: 40px;
  margin-right: 10px;
  img {
    width: 100%;
    border-radius: 50%;
  }
}
.info {
  h3 {
    margin: 0;
  }
}
`
export default ({ user }) => {
  let name = user.displayName || ''
  const names = name.split(' ')
  if (names[0]) {
    name = `${names[0]} `
  }
  return (
    <Container>
      <h3>Xin mời {name}chọn quà <Hearth /></h3>
      <Profile>
        <div className="avatar">
          <img src={user.photoURL} alt="avatar" />
        </div>
        <div className="info">
          <h3>
            {user.displayName}
          </h3>
          <small>
            {user.email}
          </small>
        </div>
      </Profile>
    </Container>
  )  
}