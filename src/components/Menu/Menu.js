import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const getPageName = (e) => {
    props.updateState(e.target.name)
  }

  return (
    <nav className="menu">
      <button name="local" className="menu-button" onClick={ getPageName }>
        Local
      </button>
      <button name="entertainment" className="menu-button" onClick={ getPageName }>
        Entertainment
      </button>
      <button name="health" className="menu-button" onClick={ getPageName }>
        Health
      </button>
      <button name="science" className="menu-button" onClick={ getPageName }>
        Science
      </button>
      <button name="technology" className="menu-button" onClick={ getPageName }>
        Technology
      </button>
    </nav>
  )
}

export default Menu;
