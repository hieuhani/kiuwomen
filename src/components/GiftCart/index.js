import React from 'react'
import firebase from "firebase/app";
import 'firebase/auth'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import styled from 'styled-components'
import background from '../../assets/bg.jpg'
import Header from './Header'
import Cart from './Cart';

const config = {
  apiKey: "AIzaSyBW67eFYXn1CcwG63Hu-Jmy_qsjxj51Oo8",
  authDomain: "kiuwomen.firebaseapp.com",
  databaseURL: "https://kiuwomen.firebaseio.com",
  projectId: "kiuwomen",
  storageBucket: "kiuwomen.appspot.com",
  messagingSenderId: "567823787901"
}

const Container = styled.div`

`
const Content = styled.div`
img {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
`

const ButtonSignIn = styled.button`
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border: 0;
padding: 1rem 0;
`

export default ({ visible, onClose }) => {
  if (!visible) {
    return null
  }
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Container className="modal">
        <div className="modal-backdrop" onClick={onClose} />
        
        <FirebaseAuthConsumer>
            {({ isSignedIn, user }) => {
              if (!isSignedIn) {
                return (
                  <div className="modal-dialog">
                    <Content className="modal-content">
                      <img src={background} alt="background" />
                      <ButtonSignIn
                        onClick={() => {
                          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                          firebase.auth().signInWithPopup(googleAuthProvider);
                        }}
                      >
                        Đăng nhập với tài khoản Kiu
                      </ButtonSignIn>
                    </Content>
                  </div>
                )
              }
              return (
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    {user && <Header user={user} />}
                    <Cart />
                  </div>
                </div>
              );
            }}
          </FirebaseAuthConsumer>
      </Container>
    </FirebaseAuthProvider>
  )
}