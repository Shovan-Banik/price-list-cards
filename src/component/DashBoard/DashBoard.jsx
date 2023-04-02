import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const marksArray = [
        {
          id: 1,
          name: "Element 1",
          phy: 89,
          chemistry: 42,
          biology: 76,
          value: 69
        },
        {
          id: 2,
          name: "Element 2",
          phy: 57,
          chemistry: 81,
          biology: 22,
          value: 53
        },
        {
          id: 3,
          name: "Element 3",
          phy: 12,
          chemistry: 35,
          biology: 94,
          value: 47
        },
        {
          id: 4,
          name: "Element 4",
          phy: 72,
          chemistry: 96,
          biology: 66,
          value: 78
        },
        {
          id: 5,
          name: "Element 5",
          phy: 41,
          chemistry: 83,
          biology: 91,
          value: 72
        },
        {
          id: 6,
          name: "Element 6",
          phy: 39,
          chemistry: 68,
          biology: 18,
          value: 41
        },
        {
          id: 7,
          name: "Element 7",
          phy: 92,
          chemistry: 20,
          biology: 67,
          value: 60
        },
        {
          id: 8,
          name: "Element 8",
          phy: 16,
          chemistry: 89,
          biology: 95,
          value: 67
        },
        {
          id: 9,
          name: "Element 9",
          phy: 33,
          chemistry: 72,
          biology: 60,
          value: 47
        },
        {
          id: 10,
          name: "Element 10",
          phy: 81,
          chemistry: 47,
          biology: 23,
          value: 50
        },
        {
          id: 11,
          name: "Element 11",
          phy: 64,
          chemistry: 79,
          biology: 80,
          value: 74
        },
        {
          id: 12,
          name: "Element 12",
          phy: 50,
          chemistry: 54,
          biology: 99,
          value: 68
        }
      ];
      
    return (
        <div>
            <LineChart
            width={1260}
            height={300}
            data={marksArray}
            >
                <Line dataKey='chemistry'></Line>
                <Line dataKey='biology' stroke="#8884d8"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default DashBoard;