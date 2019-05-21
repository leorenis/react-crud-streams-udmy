import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from '../Auth/Google'

const Header = () => (
  <div className={'ui sencundary pointing menu'}>
    <Link to={'/'} className="item">
      Streamy
    </Link>
    <div className={'right menu'}>
      <Link to={'/'} className={'item'}>
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
)

export default Header
