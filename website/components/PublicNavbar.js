import React from 'react'
import Link from "next/link";

const PublicNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-blue-600">shield</span>
        <span className="font-bold text-lg">Jharkhand Academic Integrity Platform</span>
      </div>
      <Link href="/(public)/login">
        <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition">Login</button>
      </Link>
    </nav>
  )
}

export default PublicNavbar
