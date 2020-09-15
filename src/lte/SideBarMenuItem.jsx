import React from 'react'

function SideBarMenuItem(props) {
    const  {path, label} = props
    const icon = props.icon || 'circle'
    const active = props.active ? 'active' : ''

    return (
        <li className="nav-item">
            <a href={path} className={`nav-link ${active}`}>
                <i className={`far fa-${icon} nav-icon`}></i>
                <p>{ label }</p>
            </a>
        </li>
    )
}

export default SideBarMenuItem
