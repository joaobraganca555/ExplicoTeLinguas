import { useState } from 'react';
import TopBar from '../layout/TopBar';
import { Outlet } from 'react-router';

const Home = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <TopBar tab={tab} setTab={setTab} />
      <Outlet />
    </>
  );
};

export default Home;
