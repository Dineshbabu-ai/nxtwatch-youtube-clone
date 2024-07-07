import './index.css'

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdHome, MdSave} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdMenu} from 'react-icons/io'

const dashBoardConstants = [
  {
    optionId: 'HOME',
    label: 'Home',
    Icon: MdHome,
    route: '/',
  },
  {
    optionId: 'TRENDING',
    label: 'Trending',
    Icon: FaFire,
    route: '/trending',
  },
  {
    optionId: 'GAMING',
    label: 'Gaming',
    Icon: SiYoutubegaming,
    route: '/gaming',
  },
  {
    optionId: 'SAVED_VIDEOS',
    label: 'Saved videos',
    Icon: MdSave,
    route: '/saved-videos',
  },
]

const Menu = props => {
  const {menuDetails} = props
  const {optionId, label, Icon, route} = menuDetails
  return (
    <Link to={route} className="link-con">
      <li>
        <button type="button" className="menu-item-btn-container">
          <Icon />
          <p>{label}</p>
        </button>
      </li>
    </Link>
  )
}

export default Menu
