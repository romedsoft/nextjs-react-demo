interface PaginationProps {
    totalItems: number;
    pageSize : number
    setCurrentPage: any;
    getPageData : any;
    currentPage: number;
  }

  interface PaginationFetchProps{
    limit :number,
    skip :number
  }

  interface PaginationFetchProps2{
    pageSize :number,
    page :number
  }

