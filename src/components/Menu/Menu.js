import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const getPageName = (e) => {
    props.updateState(e.target.name)
  }

  return (
    <nav className="menu">
      <button name="local" onClick={ getPageName }>
        Local
      </button>
      <button name="entertainment" onClick={ getPageName }>
        Entertainment
      </button>
      <button name="health" onClick={ getPageName }>
        Health
      </button>
      <button name="science" onClick={ getPageName }>
        Science
      </button>
      <button name="technology" onClick={ getPageName }>
        Technology
      </button>
    </nav>
  )
}

export default Menu;
