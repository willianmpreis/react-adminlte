import React from 'react'
import SideBarMenu from './SidebarMenu'
import SideBarUserPanel from './SidebarUserPanel'


function Sidebar(props) {
    return (
        <div className="sidebar">
            <SideBarUserPanel userName="Willian Reis" imagePath="https://avatars2.githubusercontent.com/u/3782288?s=460&u=614c23ac1abcc71b850c08fc6a9a209fab8f2c0a&v=4" />
            <SideBarMenu />
        </div>  
    )
}

export default Sidebar
