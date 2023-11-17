import { useState, useEffect } from 'react';
import GetMarket from '../../services/GetMarket';

interface PaginationProps {
      setData: any;
}

const Pagination = ({ setData }: PaginationProps) => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(20);
      const [apiData, setApiData] = useState<any[]>([]);

      useEffect(() => {
            const fetchData = async () => {
                  const response = await GetMarket();
                  setApiData(response.results);
            };

            fetchData();
      }, []);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = apiData?.slice(indexOfFirstItem, indexOfLastItem);

      const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

      useEffect(() => {
            setData(currentItems)
      }, [currentPage, apiData])

      return (
            apiData?.length ?
                  <div className='flex justify-center py-10'>
                        {/* Render your data */}
                        {currentItems?.map((item, index) => (
                              <div key={index}>{item.name}</div>
                        ))}

                        {/* Render pagination */}

                        <div className='flex'>
                              <button
                                    className='mx-2 btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                              >
                                    قبلی
                              </button>
                              <p className='mx-2 btn bg-blue-500 text-white p-2 rounded'>{currentPage} صفحه</p>

                              <button
                                    className='mx-2 btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={indexOfLastItem >= apiData?.length}
                              >
                                    بعدی
                              </button>
                        </div>
                  </div>
                  :
                  <p></p>
      );
};

export default Pagination;