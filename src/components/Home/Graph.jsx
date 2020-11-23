import React from 'react'
import {useSelector} from 'react-redux'
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

function Graph() {
    const priceHistory = useSelector((state) => state.bchReducer.priceHistory)
    return (
        //  Chart accepts data in format [{price, date}, {}...]
        <AreaChart
            width={1000}
            height={500}
            data={priceHistory}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0AC18E" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0AC18E" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis tick={{fontSize: '1rem'}} dataKey="date"/>
            <YAxis
                domain={[
                    (dataMin) => Math.ceil(dataMin / 100) * 100 - 100,
                    (dataMax) => Math.ceil(dataMax / 100) * 100,
                ]}
                tick={{fontSize: '1rem'}}
            />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip stroke="green"/>
            <Area
                type="monotone"
                dataKey="price"
                stroke="black"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
        </AreaChart>
    )
}

export default Graph
