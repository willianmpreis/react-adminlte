import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'

function SideBarMenuTree(props) {
  const { title, icon, path } = props
  const active = props.active ? 'active' : ''

  return (
    <li className="nav-item has-treeview">
        <a href={path} className={`nav-link ${active}`}>
          <i className={`nav-icon fas fa-${icon} ${active}`}></i>
            <p>
              { title }
              <i className="right fas fa-angle-left"></i>
           </p>
        </a>
        <ul className="nav nav-treeview">
          <SideBarMenuItem path="./index1.html" label="Dashboard v1" />
          <SideBarMenuItem path="./index2.html" label="Dashboard v2" />
          <SideBarMenuItem path="./index3.html" label="Dashboard v3" active />
        </ul>
    </li>
  )
}

export default SideBarMenuTree
