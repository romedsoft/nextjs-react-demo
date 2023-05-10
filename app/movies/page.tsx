'use client'

import { useState } from 'react';
import TablePagination from '../components/table/TablePagination';
 
function Page() {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
  
    const data = [ { name : "luis", lastname: "perz" } 
    , { name : "manuel", lastname: "glez" }
    , { name : "gg", lastname: "glez" }
    , { name : "hh", lastname: "glez" }
    , { name : "yy", lastname: "glez" }
    , { name : "tt", lastname: "glez" }
    , { name : "ddd", lastname: "glez" }
    , { name : "ssss", lastname: "glez" }
    , { name : "aaaaa", lastname: "glez" }
    , { name : "hhhh", lastname: "glez" }
    ];


  return (
    <>
    <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Movies</h1>
      </div>
    </header>

    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
       {/* Your content */}   
       <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">First</th>
                            <th scope="col" className="px-6 py-4">Last</th>
                            <th scope="col" className="px-6 py-4">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                            <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                            <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                            <td className="whitespace-nowrap px-6 py-4">@fat</td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                            <td className="whitespace-nowrap px-6 py-4">Larry</td>
                            <td className="whitespace-nowrap px-6 py-4">Wild</td>
                            <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TablePagination totalItems={data.length} pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
       </div>       
      </div>
     </main>
     </>
  );
}
 
export default Page;