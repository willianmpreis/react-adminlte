import React from 'react'

function SideBarUserPanel(props) {
    const { imagePath, userName } = props
    return (
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={imagePath} className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block"> {userName} </a>
        </div>
      </div>
    )
}

export default SideBarUserPanel
