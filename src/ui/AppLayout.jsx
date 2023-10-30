/* eslint-disable react/prop-types */
import { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './Sidebar';
import { Outlet } from 'react-router-dom';
import FooterSitemapLinks from './Footer';

function AppLayout() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <NavBar setSideBarToggled={setToggled} />
      <div className="ml-32 mt-8 overflow-hidden">
        <Outlet />
      </div>
      <SideBar toggled={toggled} setToggled={setToggled} />
      <FooterSitemapLinks />
    </>
  );
}

export default AppLayout;
