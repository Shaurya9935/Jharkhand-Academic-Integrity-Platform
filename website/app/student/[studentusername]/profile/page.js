"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const Profilepage = ({params}) => {
    const studentUsername = params.username;
  const pathname = usePathname();
  
      const getPageTitle = (path) => {
          switch (path) {
              case `/${studentUsername}/home`:
                  return 'Home';
              case `/${studentUsername}/dashboard`:
                  return 'Dashboard';
              case `/${studentUsername}/profile`:
                  return 'Profile';
              // Add more cases for other pages
              default:
                  return `Hello, ${studentUsername}`; // Default title
          }
      };
  return (
    <div className='p-8'>
            <h1 className='text-3xl font-bold'>{getPageTitle(pathname)}</h1>
        </div>
  )
}

export default Profilepage
