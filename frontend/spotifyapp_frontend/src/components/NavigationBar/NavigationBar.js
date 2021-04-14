import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import '../../styles/NavigationBar/NavigationBar.css'
function NavigationBar() {
  const [activeItem, setActiveItem] = useState("home")

  
  const handleItemClick = (e, { name }) => setActiveItem( name )


  /* delete JWT on logout */
  let handleLogout = () => {
    localStorage.removeItem('token');
  };
    return (
      <Segment inverted className="navigationMainContainer">
        <Menu inverted secondary >
            <Link to={'/home'}>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
            </Link>

            <Link to={'/artists'}>
                <Menu.Item
                name='artists'
                active={activeItem === 'artists'}
                onClick={handleItemClick}
            />
            </Link>

            <Link to={'/albums'}>
                <Menu.Item
                    name='albums'
                    active={activeItem === 'albums'}
                    onClick={handleItemClick}
                />
            </Link>

            <Link to={'/genres'}>
                <Menu.Item
                    name='genres'
                    active={activeItem === 'genres'}
                    onClick={handleItemClick}
                />
            </Link>

            <Link to={'/logout'}>
                <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleLogout}
                />
            </Link>
        </Menu>
      </Segment>
    )
  }

export default NavigationBar