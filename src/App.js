import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import './index.css'

function App() {

  const [itemsMenu, setItemsMenu] = useState([
    {label: 'Home' }, 
    {label: 'Produtos' }, 
    {label: 'Clientes' }, 
    {label: 'Contato' }, 
  ]);

  return (
    <Navbar>
      <NavItens itens={itemsMenu}/>
      <NavIcon icon={ <FiMenu size={24} color='#b8b8bd'/>} >        
        <DropDownMenu itens={itemsMenu}/>
      </NavIcon>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}

function NavItens(props) {
  return(
    props.itens.map(itens =>
      <li key={itens.id} className='nav-item'>
        <a href="#" className='nav-link'>
          {itens.label}
        </a>
      </li>
    )
  )
}

function NavIcon(props) {

  const [open, setOpen] = useState(false);

  return(
    <li className='nav-item-menu'>
      <a href="#" className='nav-icon' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function DropDownMenu(props) {
  return (
      <ul className='dropdown' >
          {props.itens.map(itens =>
            <li key={itens.id} className='menu-item'>
              <a href="#" className='menu-link'>
                {itens.label}
              </a>
            </li>
          )}
      </ul>
  )
}

export default App;
