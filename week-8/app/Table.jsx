import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = data[0];

  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} style={{ padding: '8px', textAlign: 'center' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ padding: '8px', textAlign: 'center' }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
