'use client'
import axios from 'axios'
import Table from './Table'
import { sortDataByFirstName } from '../utils/sortUtils'
import { IPerson } from '../model/IPerson'
import { useEffect, useState } from 'react'

const Form = () => {
    const [query, setNewQuery] = useState('')
    const [asc, setAsc] = useState(false)
    const [data, setData] = useState<IPerson[]>([])

    useEffect(() => {
      const fetchData = async () => {
        try {
        const repsonse = await axios.get(`/api/data?q=${query}`)
        setData(repsonse.data.data)
      } catch (error) {
        console.error('Error fetching', error)
      }
    }
     if(query.length === 0 || query.length > 2) fetchData()
    }, [query])

    const handleSort = () => {
        setAsc(!asc)
    }

    const keys = ['first_name', 'last_name', 'email']

    const search = (data: IPerson []) => {
      return data.filter((person) => keys.some((key) => {
            const value = (person[key as keyof IPerson] as string)
            return value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          }) 
        )
    }

    const sortedData = sortDataByFirstName(search(data), asc)
  
  return (
    <div>
      <form className="my-3 flex flex-col justify-center text-center items-center">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setNewQuery(e.target.value)}
          className="border-2 border-black rounded-1xl text-center w-72 mb-3 p-1"
        />
        <label htmlFor="sort" className='block'>Sort</label>
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
