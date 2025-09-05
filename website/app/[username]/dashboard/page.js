import React from 'react'

const Username = ({params}) => {
  return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold'>Welcome, {params.username}!</h1>
        <p className='text-xl'>This is your Dashboard</p>
    </div>
  )
}

export default Username
