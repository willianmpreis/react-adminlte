import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'

function SideBarMenuTree(props) {
  const { title } = props
  return (
      <li className="nav-item has-treeview">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
              { title }
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <SideBarMenuItem />
          </ul>
        </li>
        
  )
}

export default SideBarMenuTree
