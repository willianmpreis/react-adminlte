import React from 'react'
import SideBarMenu from './SidebarMenu'
import SideBarUserPanel from './SidebarUserPanel'


function Sidebar(props) {
    return (
        <div className="sidebar">
            <SideBarUserPanel userName="Willian Reis" imagePath="assets/dist/img/user2-160x160.jpg" />
            <SideBarMenu />
        </div>  
    )
}

export default Sidebar
