import React from 'react'
import { useSelector } from 'react-redux'
import { Tooltip, CartesianGrid, XAxis, YAxis, Area, AreaChart } from 'recharts'

function Graph() {
  const priceHistory = useSelector((state) => state.bchReducer.priceHistory)
  return (
    <AreaChart
      width={1000}
      height={500}
      data={priceHistory}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis tick={{ fontSize: '1rem' }} dataKey="date" />
      <YAxis
        domain={[
          (dataMin) => Math.ceil(dataMin / 100) * 100 - 100,
          (dataMax) => Math.ceil(dataMax / 100) * 100,
        ]}
        tick={{ fontSize: '1rem' }}
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  )
}

export default Graph
