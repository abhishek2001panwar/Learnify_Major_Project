import React from 'react'
import Sidebar from './partials/Sidebar'
import Topnav from './partials/Topnav'
import Horizontal from './partials/Horizontal'
import Trending from './partials/Trending'

function Home() {
  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex '>
      <div className=' w-[20%] h-screen  '>
       <Sidebar />
       </div>
       <div className='  w-[80%] overflow-auto '>
        <Topnav/>
        <Horizontal/>
        <Trending/>
       
       </div>
      </div>
    </div>




    </>
  )
}

export default Home