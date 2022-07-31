import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
/**
 * @param  {array of objects} {performance}
 */
export default function Performance({ performance }) {
  return (
    <div className='Performance'>
      <ResponsiveContainer width='90%' height={260}>
        <RadarChart
          cx='50%' // x-line
          cy='50%' // y-line
          outerRadius={65}
          width={260}
          height={260}
          data={performance}
          style={{
            backgroundColor: '#282D30',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.0212)',
            borderRadius: '5px',
          }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey='kind' // kind of sport
            tick={{
              //tick properties
              fill: '#FFFFFF',
              fontWeight: '500',
              fontSize: '10px',
              lineHeigt: '10px',
              fontFamily: 'Roboto',
            }}
            tickLine={false}
          />
          {/* <PolarRadiusAxis /> */}
          <Radar
            dataKey='value' //performance value
            fill='rgba(255, 1, 1, 0.85)'
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
