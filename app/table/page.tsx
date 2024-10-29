'use client'
import React from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { sortDataByFirstName } from '../utils/sortUtils'
import { IPerson } from '../model/IPerson'
import { ChangeEvent, useEffect, useReducer} from 'react'
import { ActionType, FormReducer, initialState } from '../reducer/FormReducer'

const TablePage = () => {
  const [state, dispatch] = useReducer(FormReducer, initialState )

  useEffect(() => {
    const fetchData = async () => {
      try {
      const repsonse = await axios.get(`/api/data?q=${state.query}`)
      dispatch({ type: ActionType.SET_DATA, payload: repsonse.data.data})
    } catch (error) {
      console.error('Error fetching', error)
    }
  }
   if(state.query.length === 0 || state.query.length > 2) fetchData()
  }, [state.query])

  const handleSort = () => {
      dispatch({ type: ActionType.SET_SORT})
  }

  const handlePageChange = (newPage: number) => {
      dispatch({type: ActionType.SET_PAGE, payload: newPage})
  }

  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch({type: ActionType.SET_PAGE_SIZE, payload: Number(e.target.value)})
  }

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ActionType.SET_QUERY, payload: e.target.value })
  }

  const keys = ['first_name', 'last_name', 'email']

  const search = (data: IPerson []) => {
    return data.filter((person) => keys.some((key) => {
          const value = (person[key as keyof IPerson] as string)
          return value.toLocaleLowerCase().includes(state.query)
        }) 
      )
  }

  const sortedData = sortDataByFirstName(search(state.data), state.asc)
  const startIndex = (state.page - 1) * state.pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + state.pageSize)

  return (
    <div className="flex flex-col items-center my-16 mx-auto w-full max-w-4xl">
            <h1 className="text-3xl mb-6 mx-auto">Search Filter</h1>  
      <Form 
      handleSort={handleSort} 
      handlePageChange={handlePageChange}
       handlePageSize={handlePageSize} 
       handleQueryChange={handleQueryChange}
       pageSize={state.pageSize}
       page={state.page}
       paginatedData={paginatedData}
       sortedData={sortedData}
       />
    </div>
  )
}

export default TablePage
