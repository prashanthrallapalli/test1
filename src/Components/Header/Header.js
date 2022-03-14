import React from 'react'
import { useSelector } from 'react-redux'
import { Apps, CardTravelOutlined, Chair, Chat, ExpandMore, Group, Home, NotificationsOutlined, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import './Header.css'

const Header = () => {
    const user = useSelector((state) => state.user)
    
  return (
    <div className='header'>
        <div className='header__left'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt="logo"
        />
        <div className="header__input">
          <Search />
          <input
            placeholder="Search"
         />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
          <h3 className="headerOption_title">Home</h3>
        </div>

        <div className="header__option">
          <Group fontSize="large" />
          <h3 className="headerOption_title">My Network</h3>
        </div>
        <div className="header__option">
          <CardTravelOutlined fontSize="large" />
          <h3 className="headerOption_title">Jobs</h3>
        </div>
        <div className="header__option">
          <Chat fontSize="large" />
          <h3 className="headerOption_title">Messaging</h3>
        </div>
        <div className="header__option">
          <NotificationsOutlined fontSize="large" />
          <h3 className="headerOption_title">Notifications</h3>
        </div>

        <div className="header__info">
          <Avatar src={user.photoURL} />
        </div>
        <IconButton>
          <h3 className="headerOption_title">Me</h3>
          <ExpandMore/>
        </IconButton>
        </div>

        <div className='header__right'>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <h3 className="headerOption_title">Work</h3>
          <ExpandMore />
          <h3 className="headerOption_title">Try Premium for free</h3>
        </IconButton>

        </div>
    </div>
  )
}

export default Header;