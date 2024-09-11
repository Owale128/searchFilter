'use client'
import React, { useState } from 'react'
import { Data } from '../data/mockApi'
import { IPerson } from '../model/IPerson'
import Table from './Table'

const Form = () => {
    const [query, setNewQuery] = useState('')

    const keys = ['first_name', 'last_name', 'email']

    const search = (data: IPerson []) => {
      return data.filter(
        (person) => 

          keys.some((key) => {
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
      <Table data={search(Data)}/>
    </div>
  )
}

export default Form
