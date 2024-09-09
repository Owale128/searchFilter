import React from 'react';
import Table from '../components/Table';

const page = () => {
  return (
    <div className="flex flex-col items-center mt-16 mx-auto w-full max-w-4xl">
      <h1 className="text-3xl mb-6 mx-auto">Detta är searchFilter</h1>
        <Table />
    </div>
  );
}

export default page;
