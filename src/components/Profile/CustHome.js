import React from 'react'
import Carosel from '../Carosel'
import CustNavbar from '../Nav/CustNavbar'
import CustRowPost from './CustRowpost'
function CustHome() {
  return (
    <div className='body-list'>
      <CustNavbar/>
      <Carosel/>
      <CustRowPost/>
    </div>
  )
}

export default CustHome
