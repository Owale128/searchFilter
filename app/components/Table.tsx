'use client'
import React, { FormEvent, useState } from 'react'
import { data } from '../data/mockApi'

const Table = () => {
    const [search, setSearch] = useState('')

  return (
    <div>
      <form className="my-6">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-black rounded-1xl text-center"
        />
      </form>
      <table className="table-auto border-collapse">
        <thead className="border-2 border-black">
          <tr>
            <th className=" border px-4 py-2">First name</th>
            <th className=" border px-4 py-2">Last name</th>
            <th className=" border px-4 py-2">Email Address</th>
            <th className=" border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
            {data.filter((person) =>{
                return search.toLocaleLowerCase() === '' ? person : person.first_name.toLocaleLowerCase().includes(search)
            }).map((person) =>(
            <tr key={person.id}>
            <td className="border px-4 py-2 text-center">{person.first_name}</td>
            <td className="border px-4 py-2 text-center">{person.last_name}</td>
            <td className="border px-4 py-2 text-center">{person.email}</td>
            <td className="border px-4 py-2 text-center">{person.Phone}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
