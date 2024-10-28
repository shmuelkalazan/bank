import React from 'react'
import Home from './Home'
import Transfer from './Transfer'
import Credit from './Credit'

type Props = {}

function Main({}: Props) {
  return (
    <div>main
        <Home/>
        <Transfer/>
        <Credit/>
    </div>
  )
}

export default Main