import React from 'react'
import AdminNavbar from './AdminNavbar'
import Addcourse from './Admin/Addcourse'

function AdminAddcoursePage() {
  return (
    <>
    <div className='w-full h-screen'>
    <div className='flex '>
    <div className=' w-[20%] h-screen  '>
     <AdminNavbar />
     </div>
     <div className='w-[80%] overflow-auto '>
      <Addcourse/>
     </div>
    </div>
  </div>
    
    </>
  )
}

export default AdminAddcoursePage