import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ScorePiChart.scss';

export default class Example extends PureComponent {
  render() {
    const scoreToday = this.props.score * 100;
    const leftForTheDay = 100 - this.props.score * 100;

    const data = [
      { name: 'score today', value: scoreToday },
      { name: 'left for the day', value: leftForTheDay },
    ];
    const COLORS = ['#FF0000', '#fbfbfb'];

    return (
      <div className='ScorePiChart'>
        <ResponsiveContainer width='100%' height={260}>
          <PieChart width={230} height={260} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={95}
              cy={120}
              innerRadius={50}
              outerRadius={60}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
              startAngle={90}
              endAngle={450}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* percentage of your goal */}
            <text
              fontSize='15px'
              x='20%'
              y='10%'
              textAnchor='middle'
              fill='black'
            >
              Score{' '}
            </text>
            <text x='45%' y='40%'>
              {data[0].value + '%'}
            </text>
            <text fill='#74798C' x='41%' y='50%'>
              {'of your'}
            </text>
            <text fill='#74798C' x='45%' y='60%'>
              {'goal'}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
