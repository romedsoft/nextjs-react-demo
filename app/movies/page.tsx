'use client'

import { useState, useCallback,useEffect, useRef } from 'react';
import TablePagination from '../components/table/TablePagination';
 
function Page() {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([{title: "-",webpageUrl:"-",provider: { name : "-"} }]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);
    const fetchIdRef = useRef(0);
    
    const getPageData = useCallback((page: any)=>{
      const fetchId = ++fetchIdRef.current;

      if (fetchId === fetchIdRef.current) {
        // fetchApiData({
        //   limit: pageSize,
        //   skip: pageSize * currentPage
        // });

        fetchApiData2({
          page: page,
          pageSize: pageSize
        });
      }
    },[]);


    const fetchApiData = async ({ limit ,  skip} : PaginationFetchProps) => {
      try {
        setLoading(true);
        const options = {method: 'GET'};

        const response = await fetch('https://mystoreapi.com/catalog/products?limit='+ limit +'&skip=' + skip, options);

        const data = await response.json();
        console.log(data);
        setData(data.products);
        setTotalItems(data.summary.count);
        //setPageCount(data.paging.pages);
        setLoading(false);
      } catch (e) {
        console.log("Error while fetching", e);
        // setLoading(false)
      }
    };

    const fetchApiData2 = async ({ page ,  pageSize} : PaginationFetchProps2) => {
      try {
        console.log(page);
        setCurrentPage(page);
        setLoading(true);
        const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber='+page+'&pageSize='+pageSize+'&autoCorrect=true';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'bb1d38cd91msh44b71cee4026ab7p17e623jsnc8a5366a331a',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result.value);
        setTotalItems(result.totalCount);
        //setPageCount(data.paging.pages);
        setLoading(false);
      } catch (e) {
        console.log("Error while fetching", e);
        // setLoading(false)
      }
    };


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
                      {!loading ? 
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr key="-1">
                            <th scope="col-4" className="px-6 py-4">Title</th>
                            <th scope="col-4" className="px-6 py-4">Url</th>
                            <th scope="col-4" className="px-6 py-4">Provider</th>
                            </tr>
                        </thead>
                        <tbody>
                        { data.map((website : any, index) => (

                            <tr key={index}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">{website.title}</td>
                            <td className="whitespace-nowrap px-6 py-4">{website.webpageUrl}</td>
                            <td className="whitespace-nowrap px-6 py-4">{website.provider.name}</td>
                            </tr> 
                        ))}
                            
                        </tbody>
                        </table> : 
                        <div
                          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          role="status">
                          <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                          </div>
                        }
                    </div>
                </div>
            </div>
            <TablePagination totalItems={totalItems } pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} getPageData={getPageData}/>
       </div>       
      </div>
     </main>
     </>
  );
}
 
export default Page;