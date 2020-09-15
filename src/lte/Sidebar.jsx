import React from 'react'
import SideBarMenu from './SidebarMenu'
import SideBarUserPanel from './SidebarUserPanel'


function Sidebar(props) {
    return (
        <div className="sidebar">
            <SideBarUserPanel />
            <SideBarMenu />
        </div>  
    )
}

export default Sidebar
