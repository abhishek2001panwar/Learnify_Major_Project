import React, { useState } from 'react'
import Sidebar from './partials/Sidebar'
import Topnav from './partials/Topnav'
import Horizontal from './partials/Horizontal'
import Trending from './partials/Trending'
import UserAdmin from './Admin/UserAdmin'
import AdminNavbar from './AdminNavbar'
function Admin() {

  

  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex '>
      <div className=' w-[20%] h-screen   '>
       <AdminNavbar />
       </div>
       <div className=' mt-20  w-[90%]  '>
        <UserAdmin/>
       </div>
      </div>
    </div>




    </>
  )
}

export default Admin