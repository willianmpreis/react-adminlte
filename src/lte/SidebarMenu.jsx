import React from 'react'
import SideBarMenuTree from './SideBarMenuTree'
import SideBarMenuItem from './SideBarMenuItem'

function SideBarMenu(props) {
    return (
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
         <SideBarMenuTree label="Dashboard" icon="tachometer-alt" path="#" active>             
            <SideBarMenuItem path="./index1.html" label="Dashboard v1" />
            <SideBarMenuItem path="./index2.html" label="Dashboard v2" />
            <SideBarMenuItem path="./index3.html" label="Dashboard v3" active />
         </SideBarMenuTree>
         
         <SideBarMenuTree label="Widgets" icon="th" path="#" labelComponent={<span className="right badge badge-danger">New</span>} />
                    
          <SideBarMenuTree label="Layout Options" icon="copy" path="#" labelComponent={<span className="badge badge-info right">6</span>}>             
            <SideBarMenuItem path="#" label="Top Navigation" />
            <SideBarMenuItem path="#" label="Boxed" />
            <SideBarMenuItem path="#" label="Fixed Sidebar" />
            <SideBarMenuItem path="#" label="Fixed Navbar" />
            <SideBarMenuItem path="#" label="Fixed Footer" />
            <SideBarMenuItem path="#" label="Collapsed Sidebar" />
         </SideBarMenuTree>

         <SideBarMenuTree label="Charts" icon="chart-pie" path="#">             
            <SideBarMenuItem path="#" label="ChartJS" />
            <SideBarMenuItem path="#" label="Flot" />
            <SideBarMenuItem path="#" label="Inline" />
         </SideBarMenuTree>

         <SideBarMenuTree label="UI Elements" icon="tree" path="#">             
            <SideBarMenuItem path="#" label="General" />
            <SideBarMenuItem path="#" label="Icons" />
            <SideBarMenuItem path="#" label="Buttons" />
            <SideBarMenuItem path="#" label="Sliders" />
            <SideBarMenuItem path="#" label="Modals & Alerts" />
            <SideBarMenuItem path="#" label="Navbar & Tabs" />
            <SideBarMenuItem path="#" label="Timeline" />
            <SideBarMenuItem path="#" label="Ribbons" />
         </SideBarMenuTree>

         <SideBarMenuTree label="Forms" icon="edit" path="#">             
            <SideBarMenuItem path="#" label="General Elements" />
            <SideBarMenuItem path="#" label="Advanced Elements" />
            <SideBarMenuItem path="#" label="Editors" />
         </SideBarMenuTree>
         
         <SideBarMenuTree label="Tables" icon="table" path="#">             
            <SideBarMenuItem path="#" label="Simple Tables" />
            <SideBarMenuItem path="#" label="DataTables" />
            <SideBarMenuItem path="#" label="jsGrid" />
         </SideBarMenuTree>

          <li className="nav-header">EXAMPLES</li>

          <SideBarMenuTree label="Calendar" icon="calendar-alt" path="#" labelComponent={<span className="badge badge-info right">2</span>} />

          <SideBarMenuTree label="Gallery" icon="image" path="#" />
          
          <SideBarMenuTree label="Mailbox" icon="envelope" iconClass="far" path="#">             
            <SideBarMenuItem path="#" label="Inbox" />
            <SideBarMenuItem path="#" label="Compose" />
            <SideBarMenuItem path="#" label="Read" />
         </SideBarMenuTree>
          <SideBarMenuTree label="Gallery" icon="image" path="#" />
          
          <SideBarMenuTree label="Pages" icon="book" path="#">             
            <SideBarMenuItem path="#" label="Invoice" />
            <SideBarMenuItem path="#" label="Profile" />
            <SideBarMenuItem path="#" label="E-commerce" />
         </SideBarMenuTree>
          
         <SideBarMenuTree label="Extras" icon="plus-square" iconClass="far" path="#">             
            <SideBarMenuItem path="#" label="Login" />
            <SideBarMenuItem path="#" label="Register" />
            <SideBarMenuItem path="#" label="Forgot Password" />
         </SideBarMenuTree>

          
          <li className="nav-header">MISCELLANEOUS</li>
          
          <SideBarMenuTree label="Documentation" icon="file" path="#" /> 
          
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          
          <SideBarMenuTree label="Level 1" icon="circle" path="#" />             
          <SideBarMenuTree label="Level 1" icon="circle" path="#">             
            <SideBarMenuItem path="#" label="Level 2" icon="circle" iconClass="far" />
            <SideBarMenuTree label="Level 2" icon="circle" iconClass="far" path="#">             
                <SideBarMenuItem path="#" label="Level 3" icon="dot-circle" iconClass="far" />
                <SideBarMenuItem path="#" label="Level 3" icon="dot-circle" iconClass="far" />
                <SideBarMenuItem path="#" label="Level 3" icon="dot-circle" iconClass="far" />
            </SideBarMenuTree>
            <SideBarMenuItem path="#" label="Level 2" />
         </SideBarMenuTree>
         <SideBarMenuTree label="Level 1" icon="circle" path="#" />             
          
          <li className="nav-header">LABELS</li>
          
          <SideBarMenuTree label="Important" icon="circle" iconClass="far text-danger" path="#" />
          <SideBarMenuTree label="Warning" icon="circle" iconClass="far text-warning" path="#" />
          <SideBarMenuTree label="Informational" icon="circle" iconClass="far text-info" path="#" />
          
        </ul>
      </nav>
    )
}

export default SideBarMenu
