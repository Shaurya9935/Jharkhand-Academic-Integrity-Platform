"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const DashboardPage = ({ params }) => {
  const {studentusername} = React.use(params);
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case `/student/${studentusername}/home`:
        return 'Home';
      case `/student/${studentusername}/dashboard`:
        return 'Dashboard';
      case `/student/${studentusername}/profile`:
        return 'Profile';
      // Add more cases for other pages
      default:
        return `Hello, ${studentusername}`; // Default title
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold'>{getPageTitle(pathname)}</h1>
      <div className='text-gray-600 mt-2'>
        This is the Dashboard page for {studentusername}
      </div>
      <div className="cards flex flex-wrap gap-4 mt-4">
        <div className="verified card mt-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 h-40 w-96 bg-green-500 text-white cursor-pointer">
          <div className='flex flex-col gap-4 p-4'>
            <div className="first flex justify-between px-2 text-2xl">
              <span className="material-symbols-outlined large">check</span>
              <span>1</span>
            </div>
            <div className="second text-xl">
              <span>Verified</span>
            </div>
            <div className="third text-sm text-gray-100 ">
              <span>This is the current state. You can add more items, or anything else</span>
            </div>
          </div>
        </div>
        <div className="pending card mt-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 h-40 w-96 bg-yellow-500 text-white cursor-pointer">
          <div className='flex flex-col gap-4 p-4'>
            <div className="first flex justify-between px-2 text-2xl">
              <span className="material-symbols-outlined large">schedule</span>
              <span>1</span>
            </div>
            <div className="second text-xl">
              <span>Pending</span>
            </div>
            <div className="third text-sm text-gray-100 ">
              <span>This is the current state. You can add more items, or anything else</span>
            </div>
          </div>
        </div>
        <div className="action card mt-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 h-40 w-96 bg-red-500 text-white cursor-pointer">
          <div className='flex flex-col gap-4 p-4'>
            <div className="first flex justify-between px-2 text-2xl">
              <span className="material-symbols-outlined large">error</span>
              <span>1</span>
            </div>
            <div className="second text-xl">
              <span>Action Required</span>
            </div>
            <div className="third text-sm text-gray-100 ">
              <span>This is the current state. You can add more items, or anything else</span>
            </div>
          </div>
        </div>
      </div>
      <div className="stats flex gap-4">
        <div className="recent w-1/2 bg-white mt-8">
          <div className="activity-list flex flex-col gap-4">
            <div className="activity p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">              
                <div className="description text-gray-700">
                  <h3 className='text-black'>Recent Activities</h3>
                  <div className="activity flex justify-between gap-4 mt-8 my-4">
                    <div>Application Submitted</div>
                    <div className='text-sm text-gray-500'>2 hours ago</div>
                  </div>
                  <div className='h-[1px] bg-black opacity-15'></div>
                  <div className="activity flex justify-between gap-4 my-4">
                    <div>Document Verified</div>
                    <div className='text-sm text-gray-500'>1 day ago</div>
                  </div>
                  <div className='h-[1px] bg-black opacity-15'></div>
                  <div className="activity flex justify-between gap-4 my-4">
                    <div>Profile Updated</div>
                    <div className='text-sm text-gray-500'>3 days ago</div>
                  </div>
                </div>
            </div>
          </div>    
        </div>
        <div className="quick w-1/2 bg-white mt-8 ">
          <div className="activity-list flex flex-col gap-4">
            <div className="activity p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">              
                <div className="description text-gray-700">
                  <h3 className='text-black'>Quick Stats</h3>
                  <div className="activity flex justify-between gap-4 mt-8 my-3">
                    <div>Total Applications</div>
                    <div className='text-2xl text-blue-600'>24</div>
                  </div>
                  <div className='h-[1px] bg-black opacity-15'></div>
                  <div className="activity flex justify-between gap-4 my-3">
                    <div>Success Rate</div>
                    <div className='text-2xl text-green-600'>92%</div>
                  </div>
                  <div className='h-[1px] bg-black opacity-15'></div>
                  <div className="activity flex justify-between gap-4 my-3">
                    <div>Average Processing</div>
                    <div className='text-xl text-yellow-600'>2.5d</div>
                  </div>
                </div>
              
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
