import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './DailyActivity.scss';
/**
 * @param  {array of objects} {sessions}
 *
 * @param  {string} date
 */
export default function App({ sessions }) {
  const getDay = (date) => {
    //returns the day of the week
    const day = new Date(date).getDate(); //Gets the day of the week, using local time.
    return day;
  };

  return (
    <div className='DailyActivity'>
      <h2>Daily activity</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={sessions}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='1 2' vertical={false} />
          <XAxis
            dataKey='day'
            tickFormatter={getDay}
            axisLine={false}
            tickLine={false}
          />
          <YAxis orientation='right' axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend
            align='right'
            verticalAlign='top'
            iconType='circle'
            wrapperStyle={{
              //React inline style
              paddingBottom: '47px',
            }}
          />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            name='Weight (kg)'
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey='calories'
            fill='#E60000'
            name='Burned calories (kCal)'
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
