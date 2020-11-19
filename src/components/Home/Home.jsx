import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Price from './Price'
import Buttons from './Buttons'
import Graph from './Graph'


import { getBCHHistoryPrices } from '../../redux/actions/bch'
function Home() {
  const loading = useSelector((state) => state.bchReducer.loading)
  const success = useSelector((state) => state.bchReducer.success)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBCHHistoryPrices())
  }, [dispatch])

  return (
    <>
      <Price />
      {loading && !success && <p>Loading Price History...</p>}
      {!loading && !success && (
        <div>
          <p>Failed to load price history. Please try again</p>{' '}
          <button onClick={() => dispatch(getBCHHistoryPrices())}>Retry</button>
        </div>
      )}
      {!loading && success && (
        <>
            <Graph/>
          <Buttons/>
        </>
      )}
    </>
  )
}

export default Home
