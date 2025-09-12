"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const Profilepage = ({ params }) => {
    const pathname = usePathname();
    const match = pathname.match(/^\/student\/([^/]+)/);
    const studentUsername = match ? match[1] : null;

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
        <div>
            <div className="container flex justify-center items-center flex-col p-8">
                <div className='profile flex shadow-lg p-8 rounded-lg gap-4 justify-between w-full bg-white'>
                    <div className="info flex items-center gap-4">
                        <div className='profile-pic'>
                            <div className="circle rounded-full bg-blue-500 w-20 h-20 text-center flex items-center justify-center text-white font-semibold text-2xl">SG</div>
                        </div>
                        <div className="details flex flex-col gap-1 justify-center items-start">
                            <div className='profile-name text-xl'>{studentUsername}
                                <span></span>
                            </div>
                            <div className="email flex items-center justify-center gap-2 text-gray-600">
                                <span class="material-symbols-outlined small">
                                    mail
                                </span>
                                <span>student@example.com </span>
                            </div>
                            <div className="user-id flex items-center justify-center gap-2 text-gray-600">
                                <span class="material-symbols-outlined small">
                                    badge
                                </span>
                                <span>Student ID: 123456</span>
                            </div>
                        </div>
                    </div>
                    <div className="verification">
                        <h1 className='text-green-500'>Account Verified</h1>
                        <h1 className='text-blue-500'>Digilocker Verified</h1>
                    </div>
                </div>
                <div className='account'></div>
                <div className='data'></div>
            </div>
        </div>
    )
}

export default Profilepage
