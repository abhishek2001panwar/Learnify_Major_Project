import React from 'react'
import AdminNavbar from './AdminNavbar'
import Addblog from './Admin/Addblog'

function AddBlogPage() {
  return (
    <>
    <div className='w-full h-screen'>
    <div className='flex '>
    <div className=' w-[20%] h-screen  '>
     <AdminNavbar />
     </div>
     <div className='w-[80%] overflow-auto '>
      <Addblog/>
     </div>
    </div>
  </div>
    </>
  )
}

export default AddBlogPage