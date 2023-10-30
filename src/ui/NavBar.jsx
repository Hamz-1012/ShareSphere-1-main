/* eslint-disable react/prop-types */
import Button from './Button';
import { FiMenu } from 'react-icons/fi';
import Logo from './Logo';
import UploadButton from './UploadButton';

// import { useLocation } from 'react-router-dom';

import SearchBar from './SearchBar';

function NavBar({ setSideBarToggled }) {
  // const value = useLocation();

  return (
    <div className="mx-32 flex items-center justify-between pt-4">
      <div className="sticky flex items-center gap-1">
        <FiMenu onClick={() => setSideBarToggled((toggled) => !toggled)} />
        <Logo />
        {location.pathname === '/resources' && <SearchBar />}
      </div>
      <div className="items-right flex h-10 gap-10">
        <div>{location.pathname === '/resources' && <UploadButton />}</div>
        <div className="pt-4">
          <Button type="secondary">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
