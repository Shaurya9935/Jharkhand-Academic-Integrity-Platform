"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = ({ user }) => {
  return (
    <nav className='bg-blue-700 text-white p-4 flex justify-between items-center'>
      <div className="Logo">
        <Link href={"/"}>
          <h1 className='font-bold text-2xl'>Jharkhand App</h1>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <div className="profile flex items-center gap-2">
          <div className="circle ">
            <img className='rounded-full' width={34} src="/profile.jpg" alt="profile" />
          </div>
          
          <span className='hover:underline cursor-pointer'>Welcome, {user.name}!</span>
          
        </div>
        <div className="notification">
          <span className="material-symbols-outlined cursor-pointer">
            notifications
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
