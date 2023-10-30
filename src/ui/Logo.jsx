/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Logo({ setSideBarToggled }) {
  return (
    <Link
      to="/"
      onClick={() => {
        if (setSideBarToggled) setSideBarToggled(false);
      }}
      className="flex items-center gap-1"
    >
      <img src="/favicon.png" alt="ShareSphere Logo" className=" w-12" />
      <h1 className=" font-mono text-3xl font-black">ShareSphere</h1>
    </Link>
  );
}

export default Logo;
