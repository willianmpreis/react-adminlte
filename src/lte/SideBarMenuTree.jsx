import React from 'react'

function SideBarMenuTree(props) {
  const { label, icon, path, children, labelComponent } = props
  const active = props.active ? 'active' : ''
  const iconClass = props.iconClass || 'fas'

  return (
    <li className="nav-item has-treeview">
        <a href={path} className={`nav-link ${active}`}>
          <i className={`nav-icon ${iconClass} fa-${icon} ${active}`}></i>
            <p>
              { label }
              { children && children.length ? <i className="right fas fa-angle-left"></i> : '' }
              {labelComponent}
           </p>
        </a>
        <ul className="nav nav-treeview">
          {children}
        </ul>
    </li>
  )
}

export default SideBarMenuTree
