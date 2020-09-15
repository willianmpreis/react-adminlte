import React from 'react'
import SideBar from './Sidebar'

function MainSidebarContainer() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={ {opacity: 0.8} } />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <SideBar />
        </aside>
    );
  }
  
export default MainSidebarContainer;
