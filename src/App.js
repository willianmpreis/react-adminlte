import React from 'react';

import NavBar from './lte/NavBar'
import MainSidebarContainer from './lte/MainSidebarContainer'
import ContentWrapper from './lte/ContentWrapper';
import Footer from './lte/Footer';


function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <MainSidebarContainer />
      <ContentWrapper />
      { /* <!-- Control Sidebar --> */ }
            <aside className="control-sidebar control-sidebar-dark">
            {/*<!-- Control sidebar content goes here --> */}
            </aside>
            {/*<!-- /.control-sidebar --> */}
            <Footer>
              <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
                  All rights reserved. 
              <div className="float-right d-none d-sm-inline-block">
                  <b>Version</b> 3.0.0
              </div>
            </Footer>        
            {/*<!-- Main Footer --> */}
            
    </div>
  );
}

export default App;
