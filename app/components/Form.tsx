import Table from './Table'
import { IForm } from '../model/IForm'

const Form = ({
  page, 
  pageSize, 
  sortedData, 
  handleSort, 
  paginatedData,
  handlePageChange,
  handlePageSize, 
  handleQueryChange }: IForm) => {
   
  return (
    <div>
      <form className="my-3 flex flex-col justify-center text-center items-center">
        <input
          type="text"
          placeholder="Search Here"
          onChange={handleQueryChange}
          className="border-2 border-black rounded-1xl text-center w-72 mb-3 p-1"
        />
        <label htmlFor="sort">Sort</label>
        <input type="checkbox"
        onChange={handleSort}
        className='ml-2'
        id='sort'
        />

<label htmlFor="pageSize" className="block mt-4">Items per page:</label>
          <select id="pageSize" onChange={handlePageSize} value={pageSize}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            </select>
      </form>
      <Table data={paginatedData}/>
      <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>
                    Page {page} of {Math.ceil(sortedData.length / pageSize)}
                </span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === Math.ceil(sortedData.length / pageSize)}
                >
                    Next
                </button>
            </div>
        </div>
  )
}

export default Form
