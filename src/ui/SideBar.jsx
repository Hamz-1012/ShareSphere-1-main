/* eslint-disable react/prop-types */
import { Sidebar as SidebarRPS } from 'react-pro-sidebar';
import { Sidebar } from 'flowbite-react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineFile,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

function SideBar({ toggled, setToggled }) {
  const closeSidebar = () => {
    setToggled(false);
  };

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <SidebarRPS
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Sidebar className=" w-96 ">
          <Sidebar.Logo img="/favicon.png" imgAlt="ShareSphere logo">
            <div className="flex w-40 items-center justify-between">
              <Link to="/" onClick={closeSidebar}>
                ShareSphere
              </Link>
              <AiOutlineClose onClick={closeSidebar} cursor="pointer" />
            </div>
          </Sidebar.Logo>
          <IconContext.Provider value={{ size: '1.5em', color: '#22c55e' }}>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to="about" onClick={closeSidebar}>
                  <Sidebar.Item icon={AiOutlineInfoCircle}>About</Sidebar.Item>
                </Link>
                <Link to="account" onClick={closeSidebar}>
                  <Sidebar.Item icon={AiOutlineUser}>Account</Sidebar.Item>
                </Link>
                <Link to="hard-resources" onClick={closeSidebar}>
                  <Sidebar.Item icon={AiOutlineShoppingCart}>
                    Hard Resources
                  </Sidebar.Item>
                </Link>
                <Link to="resources" onClick={closeSidebar}>
                  <Sidebar.Item icon={AiOutlineFile}>
                    Study Materials
                  </Sidebar.Item>
                </Link>
                <Link to="/" onClick={closeSidebar}>
                  <Sidebar.Item icon={BsBoxArrowInRight}>Sign In</Sidebar.Item>
                </Link>
                {/* <Link to="/" onClick={closeSidebar}>
                  <Sidebar.Item icon={AiOutlineForm}>Sign Up</Sidebar.Item>
                </Link> */}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </IconContext.Provider>
        </Sidebar>
      </SidebarRPS>
    </div>
  );
}

export default SideBar;
