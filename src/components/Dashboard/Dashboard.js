import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='dashboard-container'>
            <div className='line-chart-container'>
                <LineChart width={600} height={400} data={data}>
                    <Line dataKey='sell'></Line>
                    <XAxis dataKey='month'></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                    <text style={{ color: 'red' }} x="220" y="0" dominantBaseline="hanging" fontSize="18" fontWeight="bold" fill='rgb(95, 95, 228)'>Month Wise Sell</text>
                </LineChart>
            </div>
            <div className='area-chart-container'>
                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <text style={{ color: 'red' }} x="220" y="0" dominantBaseline="hanging" fontSize="18" fontWeight="bold" fill='rgb(95, 95, 228)'>Investment Vs Revenue</text>
                </AreaChart>
            </div>

            <div className='bar-chart-container'>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <text style={{ color: 'red' }} x="220" y="0" dominantBaseline="hanging" fontSize="18" fontWeight="bold" fill='rgb(95, 95, 228)'>Investment Vs Revenue</text>
                </BarChart>
            </div>

        </div>
    );
};

export default Dashboard;