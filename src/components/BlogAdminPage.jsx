import React from 'react'
import AdminNavbar from './AdminNavbar'
import BlogAdmin from './Admin/BlogAdmin'
function BlogAdminPage() {
  return (
    <><div className='w-full h-screen'>
    <div className='flex '>
    <div className=' w-[20%] h-screen  '>
     <AdminNavbar />
     </div>
     <div className='w-[80%] overflow-auto '>
      <BlogAdmin/>
     </div>
    </div>
  </div>
  </>
  )
}

export default BlogAdminPage