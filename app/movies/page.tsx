'use client'

import { useState, useCallback,useEffect, useRef } from 'react';
import TablePagination from '../components/table/TablePagination';
import PokemonTable from '../components/table/PokemonTable';
import Loading from '../components/Loading';
function Page() {
    const stringLenght = 12;
    const initialData = [{title: "-",webpageUrl:"-",provider: { name : "-"} }];
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState(initialData);
    const [totalItems, setTotalItems] = useState(1);
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

   

    const fetchApiData2 = async ({ page ,  pageSize} : PaginationFetchProps2) => {
      try {
        console.log(page);
        setCurrentPage(page);
        setLoading(true);
        const url = 'https://pokeapi.co/api/v2/ability/?limit='+ pageSize+'&offset=' + (page * pageSize);
        console.log(url);
        const options = {
          method: 'GET',
          // headers: {
          //   'X-RapidAPI-Key': 'bb1d38cd91msh44b71cee4026ab7p17e623jsnc8a5366a331a',
          //   'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          // }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result.results);
        setTotalItems(result.count);

        // setData(initialData);
        // setTotalItems(1);
        
        //setPageCount(data.paging.pages);
        setLoading(false);
      } catch (e) {
        console.log("Error while fetching", e);
        setLoading(false);
        setData(initialData);
        setTotalItems(1);
        
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

                        <PokemonTable data={data} /> 
                        : 
                        <Loading/>
                        }
                    </div>
                </div>
                <TablePagination totalItems={totalItems } pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} getPageData={getPageData} defaultData={initialData}/>
            </div>
            
       </div>       
      </div>
     </main>
     </>
  );
}
 
export default Page;