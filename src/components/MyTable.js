import React from 'react';

const data = [
  { month: 'Jan', energy: 400, fuel: 240, methane: 30 },
  { month: 'Feb', energy: 300, fuel: 130, methane: 20 },
  { month: 'Mar', energy: 200, fuel: 180, methane: 10 },
];

const MyTable = () => (
  <table>
    <thead>
      <tr>
        <th>Month</th>
        <th>Energy Consumption</th>
        <th>Fuel Usage</th>
        <th>Methane Emissions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.month}</td>
          <td>{row.energy}</td>
          <td>{row.fuel}</td>
          <td>{row.methane}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MyTable;
