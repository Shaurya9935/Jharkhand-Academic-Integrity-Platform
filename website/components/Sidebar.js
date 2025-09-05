"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Sidebar = () => {

    const Username = "Shaurya_Gupta";
    const pathname = usePathname();

    const getPageTitle = (path) => {
        switch (path) {
            case `/${Username}/home`:
                return 'Home';
            case `/${Username}/dashboard`:
                return 'Dashboard';
            case `/${Username}/profile`:
                return 'Profile';
            // Add more cases for other pages
            default:
                return 'Dashboard';
        }
    };

    return (
        <div>
            <div className="left bg-blue-700 text-white h-[calc(100vh-65px)] p-4 flex flex-col justify-between">
                <div className="upper">
                    <div className="page">
                        <h1 className='font-bold text-2xl underline'>{getPageTitle(pathname)}</h1>
                    </div>
                    <div className='flex flex-col gap-4 mt-8 px-4'>
                        <Link href={`/${Username}/home`}>
                        <button className='flex items-center gap-2 cursor-pointer'>
                            <span className="material-symbols-outlined">
                                home
                            </span><span className='nav-item'>Home</span></button>
                            </Link>
                        <div className='h-[1px] bg-white opacity-15'></div>
                        <Link href={`/${Username}/dashboard`}>
                            <button className='flex items-center gap-2 cursor-pointer '>
                                <span className="material-symbols-outlined">
                                    dashboard
                                </span><span className='nav-item'>Dashboard</span></button>
                        </Link>
                        <div className='h-[1px] bg-white opacity-15'></div>
                        <Link href={`/${Username}/profile`}>
                        <button className='flex items-center gap-2 cursor-pointer '>
                            <span className="material-symbols-outlined">
                                account_circle
                            </span><span className='nav-item'>Profile</span></button>
                        </Link>
                        <div className='h-[1px] bg-white opacity-15'></div>
                    </div>
                </div>
                <div className="lower">
                    <ul className='flex flex-col gap-4 mt-8 px-4'>
                        <li className='flex items-center gap-2 cursor-pointer'>
                            <span className="material-symbols-outlined">
                                settings
                            </span><span className='nav-item'>Settings</span></li>
                        <div className='h-[1px] bg-white opacity-15'></div>
                        <li className='flex items-center gap-2 cursor-pointer '>
                            <span className="material-symbols-outlined">
                                help
                            </span><span className='nav-item'>Help</span></li>
                        <div className='h-[1px] bg-white opacity-15'></div>
                        <li className='flex items-center gap-2 cursor-pointer '>
                            <span className="material-symbols-outlined">
                                logout
                            </span><span className='nav-item'>Logout</span></li>
                        <div className='h-[1px] bg-white opacity-15'></div>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Sidebar
