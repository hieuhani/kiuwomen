import React, { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import styled from 'styled-components'
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore'
import Item from './Item'

const config = {
  apiKey: "AIzaSyBW67eFYXn1CcwG63Hu-Jmy_qsjxj51Oo8",
  authDomain: "kiuwomen.firebaseapp.com",
  databaseURL: "https://kiuwomen.firebaseio.com",
  projectId: "kiuwomen",
  storageBucket: "kiuwomen.appspot.com",
  messagingSenderId: "567823787901"
}

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;
`

export default () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const select = (item) => {
    setSelectedItem(item)
  }
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <FirestoreCollection path="/items/" limit={1}>
        {d => {
          if (d.isLoading) {
            return 'Loading'
          }
          return (
            <Rows>
              {d.value[0].items.map(item => (
                <Item
                  key={item.name}
                  selected={selectedItem && selectedItem.name === item.name}
                  item={item}
                  onClick={() => select(item)}
                />
              ))}
            </Rows>
          )
        }}
      </FirestoreCollection>
    </FirestoreProvider>

  )
}