import React from 'react'

function Sidebar(props) {
    return (
        <footer className="main-footer">
            { props.children }
        </footer>
    )
}

export default Sidebar
