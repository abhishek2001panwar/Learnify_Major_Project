import React from 'react'
import AdminNavbar from './AdminNavbar'
import AddProject from './Admin/AddProject'

function Adminprojectpage() {
  return (
    <><div className='w-full h-screen'>
    <div className='flex '>
    <div className=' w-[20%] h-screen  '>
     <AdminNavbar />
     </div>
     <div className='w-[80%] overflow-auto '>
      <AddProject/>
     </div>
    </div>
  </div></>
  )
}

export default Adminprojectpage