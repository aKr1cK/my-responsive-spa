import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import { Link, useLocation } from 'react-router-dom';

const SideMenu = ({ theme }: any) => {
  const location = useLocation();
  const getActiveClass = (path: any) =>
    location.pathname === path
      ? theme === 'dark'
        ? 'sidebar-menu-item active-dark'
        : 'sidebar-menu-item active-light'
      : 'sidebar-menu-item';
  return (
    <CDBSidebar className={theme == 'dark' ? 'maxHeight bg-dark' : 'maxHeight bg-light'} textColor={'#0d6efd'} backgroundColor={''} breakpoint={0} toggled={false} minWidth={'auto'} maxWidth={''} >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
          <span className="ms-2">WorldGoCargo ™</span>
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/home"><CDBSidebarMenuItem className={getActiveClass('/home')} icon="home">Home</CDBSidebarMenuItem></Link>
          <Link to="/truck"><CDBSidebarMenuItem className={getActiveClass('/truck')} icon="truck">Truck</CDBSidebarMenuItem></Link>
          <Link to="/about"><CDBSidebarMenuItem className={getActiveClass('/about')} icon="ship" iconType="solid">About Us</CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
};

export default SideMenu;