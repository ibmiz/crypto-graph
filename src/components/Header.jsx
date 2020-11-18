import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBCHCurrentPrice } from '../redux/actions/bch'

import {insertDecimal} from '../controllers/dataHandler'


function Header() {
  const currentPrice = useSelector((state) => state.bchReducer.currentPrice)
  const priceLoading = useSelector((state) => state.bchReducer.priceLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBCHCurrentPrice())
  }, [])
  return (
    <h1>
      Bitcoin Cash Price: {priceLoading ? '...' : '$' + insertDecimal(currentPrice).toString()}
    </h1>
  )
}

export default Header
