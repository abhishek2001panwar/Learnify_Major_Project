import React, { useState } from 'react'
import Sidebar from './partials/Sidebar'
import Topnav from './partials/Topnav'
import Horizontal from './partials/Horizontal'
import Trending from './partials/Trending'

function Home() {

  const [loading, setloading] = useState(false)
  

  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex '>
      <div className=' w-[20%] h-screen  '>
       <Sidebar />
       </div>
       <div className='relative w-[80%] overflow-auto'>
        <Topnav className="z-99"/>
        <Horizontal className='-z-50' />
        <Trending className/>
       
       </div>
      </div>
    </div>




    </>
  )
}

export default Home