"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const Home = ({ params }) => {
  const studentusername = params.studentusername;
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case `/student/${studentusername}/home`:
        return 'Home';
      case `/student/${studentusername}/dashboard`:
        return 'Dashboard';
      case `/student/${studentusername}/profile`:
        return 'Profile';
      default:
        return `Hello, ${studentusername}`;
    }
  };

  return (
    <div className='p-8 font-bold text-2xl'>
      <h1 className='text-3xl font-bold'>{getPageTitle(pathname)}</h1>
            
    </div>
  )
}

export default Home
