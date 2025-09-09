"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Navbar = ({ user }) => {
  const pathname = usePathname();

  // Extract studentusername from the path if present
  const match = pathname.match(/^\/student\/([^/]+)/);
  const studentusername = match ? match[1] : null;

  const getPageTitle = (path) => {
    switch (path) {
      case `/student/${studentusername}/home`:
        return 'Home';
      case `/student/${studentusername}/dashboard`:
        return 'Dashboard';
      case `/student/${studentusername}/profile`:
        return 'Profile';
      default:
        return studentusername ? `Hello, ${studentusername}` : "Dashboard";
    }
  };

  return (
    <div>
      <nav className='p-4 flex justify-between items-center'>
        <div className="title">
          <Link href={"/"}>
            <h1 className='text-xl'>{getPageTitle(pathname)}</h1>
          </Link>
        </div>
        <div className='flex items-center gap-8 justify-center'>
          <div className='notification flex items-center transition-colors duration-200 hover:bg-gray-200 cursor-pointer rounded-xs'><span className="material-symbols-outlined text-gray-700 p-1">notifications</span></div>
          <div className="user flex items-center gap-2">
            <span className='hover:underline cursor-pointer text-gray-700'>
              Welcome, {user?.name || studentusername || "User"}!
            </span>
            <span className="material-symbols-outlined text-gray-700">person</span>
          </div>
        </div>
      </nav>
      <div className='h-[1px] bg-black opacity-20'></div>
    </div>
  )
}

export default Navbar
