import React from 'react'
import AdminNavbar from './AdminNavbar'
import QueryAdmin from './Admin/QueryAdmin'

function QueriesAdminPage() {
  return (
    <> 
    <div className='w-full h-screen'>
    <div className='flex '>
    <div className=' w-[20%] h-screen  '>
     <AdminNavbar />
     </div>
     <div className='w-[80%] overflow-auto '>
      <QueryAdmin/>
     </div>
    </div>
  </div>
  </>
  )
}

export default QueriesAdminPage