/* eslint-disable react/prop-types */

import { Outlet } from 'react-router-dom';
import StartSection from './StartSection';

function Resources() {
  return (
    <>
      <StartSection />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Resources;
