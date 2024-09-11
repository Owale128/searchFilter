import React from 'react';
import { IPerson } from '../model/IPerson';

interface ITable {
  data: IPerson[]
}

const Table = ({data}: ITable)=> {
  
  return (
    <div>
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
            {data.map((person) =>(
            <tr key={person.id}>
            <td className="border px-4 py-2 text-center">{person.first_name}</td>
            <td className="border px-4 py-2 text-center">{person.last_name}</td>
            <td className="border px-4 py-2 text-center">{person.email}</td>
            <td className="border px-4 py-2 text-center">{person.phone}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
