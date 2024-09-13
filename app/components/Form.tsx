'use client'
import axios from 'axios'
import Table from './Table'
import { sortDataByFirstName } from '../utils/sortUtils'
import { IPerson } from '../model/IPerson'
import { ChangeEvent, FormEvent, useEffect, useReducer} from 'react'
import { ActionType, FormReducer, initialState } from '../reducer/FormReducer'

const Form = () => {
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
      </form>
      <Table data={sortedData}/>
    </div>
  )
}

export default Form
