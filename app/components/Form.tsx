'use client'
import React, { useEffect, useState } from 'react'
import { IPerson } from '../model/IPerson'
import Table from './Table'
import axios from 'axios'

const Form = () => {
    const [query, setNewQuery] = useState('')
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

    const keys = ['first_name', 'last_name', 'email']

    const search = (data: IPerson []) => {
      return data.filter((person) => keys.some((key) => {
            const value = (person[key as keyof IPerson] as string)
            return value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          }) 
        )
    }
  
  return (
    <div>
      <form className="my-3 flex justify-center">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setNewQuery(e.target.value)}
          className="border-2 border-black rounded-1xl text-center w-72 mb-3 p-1"
        />
      </form>
      <Table data={search(data)}/>
    </div>
  )
}

export default Form
