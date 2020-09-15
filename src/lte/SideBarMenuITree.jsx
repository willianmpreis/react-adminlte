import React from 'react'

function SideBarMenuTree(props) {
  const { label, icon, path, children } = props
  const active = props.active ? 'active' : ''

  return (
    <li className="nav-item has-treeview">
        <a href={path} className={`nav-link ${active}`}>
          <i className={`nav-icon fas fa-${icon} ${active}`}></i>
            <p>
              { label }
              <i className="right fas fa-angle-left"></i>
           </p>
        </a>
        <ul className="nav nav-treeview">
          {children}
        </ul>
    </li>
  )
}

export default SideBarMenuTree
