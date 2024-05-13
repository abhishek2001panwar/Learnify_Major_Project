import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function QueryAdmin() {
  const [query, setquery] = useState([]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await fetch("/api/v1/contact/getcontact");
        const data = await response.json();
        setquery(data.contacts);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
    };
    fetchData();
  });

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `/api/v1/contact/deletecontact/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-light mb-10  mt-20 flex justify-center items-center">
        Queries
      </h1>
      <div className="mt-10  ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {query.map((query, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{query.email}</td>
                <td className="px-6 py-4 whitespace-nowrap w-1/2 ">
                  <h1 className="w-1/2">
                    {query.message.slice(0, 40)}
                    <Link className="text-blue-500" href={""}>
                      ...more
                    </Link>{" "}
                  </h1>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5">
                  <Button size="sm" color="primary" variant="ghost">
                    Reply
                  </Button>
                  <Button
                    onClick={()=>handleDelete(query._id)}
                    size="sm"
                    color="danger"
                    variant="ghost"
                  >
                    Delete{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default QueryAdmin;
