import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSession.scss';

export default function AverageSession({ averageSession }) {
  /**
   *
   * @param  {number} day
   *
   * @param {boolean} active
   * @param {Array} payload
   */

  // Sort number to weekday
  // this is used to change the week day from number to letters
  const weekDay = (day) => {
    let week = { 1: 'M', 2: 'T', 3: 'W', 4: 'T', 5: 'F', 6: 'S', 7: 'S' };
    return week[day];
  };

  // Custom tooltip
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip_line'>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='AverageSession'>
      <h3 className='AverageSession__title '>
        Average speed of
        <br /> your sessions
      </h3>
      <ResponsiveContainer width='90%' height='80%'>
        <LineChart
          width={260}
          height={260}
          data={averageSession}
          margin={{
            top: 105,
            right: 20,
            left: 20,
            bottom: 25,
          }}
          style={{
            borderRadius: '7px',
            background:
              'linear-gradient(to right, #FF0000 70%, #E60002 70% 100%)',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.0222250)',
          }}
        >
          <defs>
            {
              '</defs> it is a defination of a gradient in the chart and it is used to create a gradient for the chart background color '
            }

            <linearGradient id='linear'>
              <stop offset='100%' stopColor='rgba(255,255,255,1)' />
              <stop offset='0%' stopColor='rgba(255,255,255,0.5)' />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='day'
            tickFormatter={weekDay}
            tick={{
              //customize the tick label here(days of the week)
              fill: 'rgba(255,255,255,0.7)',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '24px',
              dy: 2, // offset the tick label vertically
            }}
            tickMargin={5}
          />

          <Tooltip content={customTooltip} offset={55} cursor={false} />

          <Line
            type='monotone'
            dataKey='sessionLength'
            stroke="url('#linear')"
            activeDot={{
              r: 4, // radius of the dot
              fill: 'white', // color of the dot
              strokeWidth: 8, // width of the stroke
              stroke: 'rgba(255, 255, 255, 0.25)', // stroke color
            }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
