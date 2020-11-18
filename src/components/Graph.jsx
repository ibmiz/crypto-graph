import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'
import styled from 'styled-components'

import { getBCHHistoryPrices, changeRange } from '../redux/actions/bch'

const ButtonWrapper = styled.section`
  width: 100%;
  text-align: center;
`

const CustomButton = styled.button`
  background: ${(props) =>
    props.value === props.active ? 'palevioletred' : 'white'};
  color: ${(props) =>
    props.value === props.active ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

function Graph() {
  const btnList = [
    {
      id: 1,
      value: 1,
      title: '1 Day',
      isDefault: false,
    },
    {
      id: 2,
      value: 7,
      title: '7 Days',
      isDefault: false,
    },
    {
      id: 3,
      value: 30,
      title: '30 Days',
      isDefault: true,
    },
  ]
  const priceHistory = useSelector((state) => state.bchReducer.priceHistory)
  const loading = useSelector((state) => state.bchReducer.loading)
  const success = useSelector((state) => state.bchReducer.success)

  const dispatch = useDispatch()

  const [activeButtonId, setActiveButtonId] = useState(btnList[2].value)

  const handleButtonClick = (event) => {
    setActiveButtonId(Number(event.target.value))
    dispatch(changeRange(event.target.value))
  }

  useEffect(() => {
    dispatch(getBCHHistoryPrices())
  }, [])

  if (loading) {
    return <div>Loading Data...</div>
  } else if (!loading && !success) {
    return <div>Failed to load data, please refresh and try again</div>
  } else {
    return (
      <>
        <div className="row justify-content-center">
          <LineChart width={1000} height={500} data={priceHistory}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <XAxis tick={{ fontSize: '1rem' }} dataKey="date" />
            <YAxis
              domain={[
                (dataMin) => Math.ceil(dataMin / 100) * 100 - 100,
                (dataMax) => Math.ceil(dataMax / 100) * 100,
              ]}
              tick={{ fontSize: '1rem' }}
            />
            <CartesianGrid strokeDasharray="1" />
            <Tooltip />
          </LineChart>
        </div>
        <ButtonWrapper>
          {btnList.map((btn) => (
            <CustomButton
              key={btn.id}
              value={btn.value}
              active={activeButtonId}
              onClick={handleButtonClick}
            >
              {btn.title}
            </CustomButton>
          ))}
        </ButtonWrapper>
      </>
    )
  }
}

export default Graph
