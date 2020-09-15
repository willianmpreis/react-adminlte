import React from 'react'

function SideBarMenuItem(props) {
    const  {path, label} = props
    const icon = props.icon || 'circle'
    const active = props.active ? 'active' : ''
    const iconClass = props.iconClass || 'far'

    return (
        <li className="nav-item">
            <a href={path} className={`nav-link ${active}`}>
                <i className={`${iconClass} fa-${icon} nav-icon`}></i>
                <p>{ label }</p>
            </a>
        </li>
    )
}

export default SideBarMenuItem
