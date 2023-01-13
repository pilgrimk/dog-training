import React, { useEffect } from 'react'
import './USCA.css'

const USCA = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='app-usca'>
        <h1>All USCA event data will be shown here !!</h1>
    </div>
  )
}

export default USCA