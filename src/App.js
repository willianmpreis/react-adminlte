import React from 'react';

import NavBar from './lte/NavBar'
import MainSidebarContainer from './lte/MainSidebarContainer'
import ContentWrapper from './lte/ContentWrapper';
import Footer from './lte/Footer';
import Sidebar from './lte/Sidebar';


function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <MainSidebarContainer path="index3.html" imagePath="assets/dist/img/AdminLTELogo.png" imageAlt="AdminLTE Logo" label="AdminLTE 3">
        <Sidebar />
      </MainSidebarContainer>
      <ContentWrapper />
      { /* <!-- Control Sidebar --> */ }
      <aside className="control-sidebar control-sidebar-dark">
      {/*<!-- Control sidebar content goes here --> */}
      </aside>
      <Footer>
        <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved. 
        <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.0
        </div>
      </Footer> 
    </div>
  );
}

export default App;
