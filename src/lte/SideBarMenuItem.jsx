import React from 'react'

function SideBarMenuItem(props) {
    return (
        <>
        <li className="nav-item">
            <a href="./index.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v1</p>
            </a>
            </li>
            <li className="nav-item">
            <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v2</p>
            </a>
            </li>
            <li className="nav-item">
            <a href="./index3.html" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard v3</p>
            </a>
        </li>
        </>      
    )
}

export default SideBarMenuItem
