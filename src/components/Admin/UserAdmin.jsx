import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react';
function UserAdmin() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/user/alluser");
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  }); 

  const handleDelete = async(id)=>{
    try {
      const response = await fetch(`/api/v1/user/deleteuser/${id}`, {
        method: "DELETE",
      });
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
  return (
    <>

    
     <div>
          <h1 className="text-2xl font-light mb-10  flex justify-center items-center">User Details</h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {user.map((elem, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{elem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{elem.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap gap-5 flex">
                  <Button size="sm" color={elem.isAdmin ? "danger" : "primary"} variant="ghost">
                    {elem.isAdmin ? "Admin" : "User"}

                  </Button>
                  <Button size="sm" color="primary" variant="ghost">
                    Edit
                  </Button>
                  <Button onClick={()=> handleDelete(elem._id)} size="sm" color="danger" variant="ghost">
                    Delete{" "}
                  </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default UserAdmin