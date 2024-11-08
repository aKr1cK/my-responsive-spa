import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Logo from './ui/Logo';
import { Link, useLocation } from 'react-router-dom';
//textColor={'#333'} backgroundColor={'#f0f0f0'}
const SideMenu = ({theme}: any) => {
  const location = useLocation();
    return (
        <CDBSidebar className={'maxHeight bg-dark'} textColor={''} backgroundColor={''} breakpoint={0} toggled={false} minWidth={'auto'} maxWidth={''} >
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', alignContent:'center'}}>
              {/* <Logo></Logo> */}
              <span className="ms-2">WorldGoCargo ™</span>
            </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <Link to="/home"><CDBSidebarMenuItem  active={location.pathname === '/home'} icon="th-large">Home</CDBSidebarMenuItem></Link>
              <Link to="/truck"><CDBSidebarMenuItem active={location.pathname === '/truck'} icon="sticky-note">Truck</CDBSidebarMenuItem></Link>
              <Link to="/about"><CDBSidebarMenuItem icon="chart-line" active={location.pathname === '/about'} iconType="solid">About</CDBSidebarMenuItem></Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
    )
  };

export default SideMenu;