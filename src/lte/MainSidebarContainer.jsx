import React from 'react'

function MainSidebarContainer(props) {
    const {path, imagePath, imageAlt, label, children} = props

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href={path} className="brand-link">
                <img src={imagePath} alt={imageAlt} className="brand-image img-circle elevation-3" style={ {opacity: 0.8} } />
                <span className="brand-text font-weight-light">{label}</span>
            </a>
            {children}
        </aside>
    );
  }
  
export default MainSidebarContainer;
