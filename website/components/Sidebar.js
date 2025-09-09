"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const studentusername = "Shaurya_Gupta"; // Use this variable everywhere

const Sidebar = ({username}) => {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;
    return (
        <div>
            <div className="left-0 top-0 bg-blue-900 text-white w-64 h-screen px-2 py-4 flex flex-col">
                <div className="logo p-2 border-b border-blue-800">
                    <h1 className='text-white text-2xl font-medium'>Jharkhand App</h1>
                </div>
                <div className="navigation mt-4 flex-1 py-4 text-gray-300">
                    <div className="upper">
                        <div className='flex flex-col gap-4 px-2 cursor-pointer'>
                            <div className="home transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg ">
                            <Link href={`/student/${studentusername}/home`} className="flex items-center gap-2 cursor-pointer ">
                                <span className="material-symbols-outlined">home</span>
                                <span>Home</span>
                            </Link>
                            </div>
                            <div className="dashboard transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg"> 
                            <Link href={`/student/${studentusername}/dashboard`} className='flex items-center gap-2 cursor-pointer'>
                                <span className="material-symbols-outlined">finance</span>
                                <span>Dashboard</span>
                            </Link>
                            </div>
                            <div className="profile transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg">
                            <Link href={`/student/${studentusername}/profile`} className='flex items-center gap-2 cursor-pointer'>
                                <span className="material-symbols-outlined">person</span>
                                <span>Profile</span>
                            </Link>
                            </div>
                            <div className='h-[1px] bg-white opacity-15'></div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className='flex flex-col gap-4 px-2 cursor-pointer mt-4'>
                            <div className="setting transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg">
                            <Link href={`/student/${studentusername}/home`} className='flex items-center gap-2 cursor-pointer'>
                                <span className="material-symbols-outlined">settings</span>
                                <span>Settings</span>
                            </Link>
                            </div>
                            <div className="help transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg"> 
                            <Link href={`/student/${studentusername}/dashboard`} className='flex items-center gap-2 cursor-pointer'>
                                <span className="material-symbols-outlined">help</span>
                                <span >Help</span>
                            </Link>
                            </div>
                            <div className="logout transition-colors duration-300 hover:bg-blue-800 p-2.5 rounded-lg flex items-center gap-2">
                                <span className="material-symbols-outlined">logout</span>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
