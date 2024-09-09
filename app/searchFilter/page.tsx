import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center mt-16 mx-auto w-full max-w-4xl">
      <h1 className="text-3xl mb-6">Detta är searchFilter</h1>
      <form className="my-6">
        <input
          type="text"
          placeholder="Search Here"
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
          <tr>
            <td className="border px-4 py-2 text-center">Luka</td>
            <td className="border px-4 py-2 text-center">Skywalker</td>
            <td className="border px-4 py-2 text-center">zaza@hotmail.com</td>
            <td className="border px-4 py-2 text-center">0737843203</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default page;
