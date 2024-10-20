import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={Object.entries(data)}>
        <XAxis dataKey="0" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="1" fill="rgb(0, 100, 0)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
