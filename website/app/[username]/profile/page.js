import React from 'react'

const Profilepage = ({params}) => {
    const {username} = params;
  return (
    <div className='p-8'>
            <h1 className='text-3xl font-bold'>Profile Page for {username}</h1>
        </div>
  )
}

export default Profilepage
