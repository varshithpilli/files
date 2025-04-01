import React from 'react';
import Table from './Table';

const App = () => {
  const data = [
    ['Name', 'Age', 'Country'],
    ['Name1', 28, 'USA'],
    ['Name2', 32, 'Canada'],
    ['Name3', 25, 'UK'],
  ];

  return (
    <div>
      <h1>Table</h1>
      <Table data={data} />
    </div>
  );
};

export default App;
